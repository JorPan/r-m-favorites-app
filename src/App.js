import React, { Component } from "react";
import "./App.css";
import CharacterList from "./CharacterList";
import Favorites from "./Favorites";

class App extends Component {
  state = {
    characters: [],
    favorites: [],
  };

  addFavorite = (character) => {
    if (!this.state.favorites.find((char) => char === character)) {
      this.setState({
        favorites: [...this.state.favorites, character],
      });
    }
  };

  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character/?page=2")
      .then((response) => response.json())
      .then(({ results }) => this.setState({ characters: results }));
  }

  render() {
    return (
      <div className="App">
        <Favorites favorites={this.state.favorites} />
        <CharacterList characters={this.state.characters} />
      </div>
    );
  }
}

export default App;
