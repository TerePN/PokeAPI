import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const CharacterCard = ({ url }) => {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios.get(url).then((res) => setPokemon(res.data));
  }, []);

  console.log(pokemon);

  return (
    <div>
      <h3>{pokemon.name}</h3>
      <img src={pokemon.species} alt="" />
    </div>
  );
};

export default CharacterCard;
