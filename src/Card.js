import React from "react";

export default function Card({ character, addFavorite }) {
  return (
    <li>
      <h2>{character.name}</h2>
      <img src={character.image} alt="character-image" />
    </li>
  );
}
