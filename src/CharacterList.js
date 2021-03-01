import React from "react";
import Card from "./Card";

export default function CharacterList(props) {
  const displayCharacters = () => {
    return props.characters.map((character) => {
      return (
        <Card
          key={character.id}
          addFavorite={props.addFavorite}
          character={character}
        />
      );
    });
  };

  return <ul className="character-list">{displayCharacters()}</ul>;
}
