import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

const CharacterDetail = () => {

  const { id } = useParams()
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => setPokemon(res.data))
  }, [id])

  return (

    <div>

      <Header/>
      <h2>Character Detail</h2>

      <img src={pokemon.sprites?.front_default} alt="" />
      <p>
        Mostrando personaje con id: <b>{id}</b>
      </p>
    </div>
  );
};

export default CharacterDetail;
