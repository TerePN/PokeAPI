import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const CharacterDetail = () => {

  const { id } = useParams()
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => setPokemon(res.data))
  }, [id])

  return (

    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites?.front_default} alt="" />
      <p>
        Mostrando personaje con id: <b>{id}</b>
      </p>
    </div>
  );
};

export default CharacterDetail;
