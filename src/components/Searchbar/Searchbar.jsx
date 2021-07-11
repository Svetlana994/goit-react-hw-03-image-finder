import React, { Component } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import {
  SearchHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from "./Searchbar.styles";

class Searchbar extends Component {
  state = {
    searchName: "",
  };

  handleChange = (e) => {
    this.setState({ searchName: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { searchName } = this.state;

    if (searchName.trim() === "") {
      toast.error("Enter search query");
      return;
    }
    this.props.onSubmit(searchName);

    this.setState({ searchName: "" });
  };

  render() {
    return (
      <SearchHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            value={this.state.searchName}
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchHeader>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
