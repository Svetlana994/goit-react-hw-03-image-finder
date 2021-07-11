import { Component } from "react";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImageGallery from "./components/ImageGallery";
import Searchbar from "./components/Searchbar";
import Modal from "./components/Modal";
import Button from "./components/Button";
import LoaderComponent from "./components/Loader";
import fetchImages from "./services/ApiService";
import { Container } from "./App.styles";

class App extends Component {
  state = {
    pictureQuery: "",
    picture: null,
    images: [],
    page: 1,
    status: "idle",
    error: null,
  };

  async componentDidUpdate(_, prevState) {
    const { pictureQuery, page } = this.state;

    if (prevState.pictureQuery !== pictureQuery || prevState.page !== page) {
      this.setState({ status: "pending" });

      try {
        const promises = await fetchImages(pictureQuery, page);

        if (prevState.pictureQuery !== pictureQuery && pictureQuery) {
          this.setState({ images: [...promises], status: "resolved", page: 1 });
        }

        if (prevState.page !== page) {
          this.setState((prevState) => ({
            images: [...prevState.images, ...promises],
            status: "resolved",
          }));
        }
        if (page > 1) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        }

        if (promises.length === 0) {
          this.setState({ pictureQuery: "" });
          toast.error("Enter a valid search query");

          throw new Error();
        }
      } catch (error) {
        this.setState({ error, status: "rejected" });
      }
    }
    window.addEventListener("keydown", this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeydown);
  }

  handleFormSubmit = (pictureQuery) => {
    this.setState({ pictureQuery });
  };

  selectModalImage = (picture) => {
    this.setState({ picture });
  };

  onModalClick = (e) => {
    console.log(e.currentTarget);
    if (e.currentTarget === e.target) {
      this.setState({ picture: null });
    }
  };

  handleKeydown = (e) => {
    if (e.code === "Escape") {
      this.setState({ picture: null });
    }
  };

  loadMoreImages = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { status, images, picture, pictureQuery } = this.state;

    const pending = status === "pending";

    const resolved = images && status === "resolved";

    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit} />

        {pending && <LoaderComponent />}
        {resolved && (
          <ImageGallery images={images} modalImage={this.selectModalImage} />
        )}

        {images.length > 0 && <Button onLoad={this.loadMoreImages} />}
        {picture && <Modal picture={picture} onClick={this.onModalClick} />}
        <ToastContainer autoClose={2000} />
      </Container>
    );
  }
}

export default App;
