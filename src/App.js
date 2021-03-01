import React, { Component } from "react";
import "./App.css";
import CharacterList from "./CharacterList";

class App extends Component {
  state = {
    characters: [],
  };

  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character/?page=2")
      .then((response) => response.json())
      .then(({ results }) =>
        this.setState({
          characters: results,
        })
      );
  }

  render() {
    return (
      <div className="App">
        <CharacterList characters={this.state.characters} />
      </div>
    );
  }
}

export default App;
