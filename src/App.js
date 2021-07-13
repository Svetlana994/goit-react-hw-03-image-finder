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

    if (
      (pictureQuery && prevState.pictureQuery !== pictureQuery) ||
      prevState.page !== page
    ) {
      this.setState({ status: "pending" });

      try {
        const promises = await fetchImages(pictureQuery, page);

        this.setState((prevState) => ({
          images: [...prevState.images, ...promises],
          status: "resolved",
        }));

        if (page > 1) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        }

        if (promises.length === 0) {
          this.setState({ pictureQuery: "" });

          throw new Error();
        }
      } catch (error) {
        this.setState({ error, status: "rejected" });
        toast.error("Enter a valid search query");
      }
    }
    window.addEventListener("keydown", this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeydown);
  }

  handleFormSubmit = (pictureQuery) => {
    if (this.state.pictureQuery === pictureQuery) {
      return;
    } else {
      this.setState({
        pictureQuery: "",
        page: 1,
        images: [],
      });
    }
    this.setState({ pictureQuery });
  };

  selectModalImage = (picture) => {
    this.setState({ picture });
  };

  onModalClick = (e) => {
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
    const { status, images, picture } = this.state;

    const pending = status === "pending";

    const resolved = status === "resolved";

    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit} />

        {pending && <LoaderComponent />}
        <ImageGallery images={images} modalImage={this.selectModalImage} />

        {resolved && <Button onLoad={this.loadMoreImages} />}
        {picture && <Modal picture={picture} onClick={this.onModalClick} />}
        <ToastContainer autoClose={2000} />
      </Container>
    );
  }
}

export default App;
