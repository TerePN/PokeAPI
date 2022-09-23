import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import CharacterCard from "./CharacterCard";


const Characters = () => {
  const name = useSelector((state) => state.userName);

  const [pokemonList,setPokemonList]= useState([]);

  useEffect(()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon/")
    .then((res) => setPokemonList(res.data.results));
}, []);

console.log(pokemonList);

  return (
    <div>
      <h1>Characters</h1>
      <p>Bienvenid@ {name}</p>
      {pokemonList.map((pokemon) => (
        <CharacterCard url={pokemon.url} key={pokemon.url} />
      ))}
    </div>
  );
};

export default Characters;
