import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
    this.props.onSearchTermChange(event.target.value);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={ this.state.term }
          onChange={ this.onInputChange }
          placeholder="O que você deseja procurar ?"
        />
      </div>
    );
  };
};

export default SearchBar;
