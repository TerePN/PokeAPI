import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CharacterCard from "./CharacterCard";


const Characters = () => {
  const name = useSelector((state) => state.userName);

  const [pokemonList,setPokemonList]= useState([]);
  const [pokemonType,setPokemonType]= useState("")
  const [nameInput, setNameInput]= useState("")

  const navigate= useNavigate();

  useEffect(()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon/")
    .then((res) => setPokemonList(res.data.results));
}, []);

  useEffect(()=>{
      axios
      .get("https://pokeapi.co/api/v2/type/")
      .then((res) => setPokemonType(res.data.results));
  }, []);

console.log(pokemonType);
const searchName=()=>{
  navigate(`/characters/${nameInput}`)
}

const searchLocations=(typeUrl)=>{
  axios.get(typeUrl)
      .then((res)=> setPokemonList(res.data.pokemon));
};


  return (
    <div>
      <h1>Characters</h1>
      <p>Bienvenid@ {name}</p>
      <div>
        <input type="text" placeholder="buscar por nombre"
        value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
        <button onClick={searchName}>Search</button>
      </div>
      <div>
      <select onChange={(e) => searchLocations(e.target.value)}>
          <option value="">Selec</option>
          {pokemonType.map((type) => (
            <option value={type.url} key={type.url}>
              {type.name}
            </option>
          ))}
        </select>
      </div>
      {pokemonList.map((pokemon) => (
        <CharacterCard url={pokemon.url ? pokemon.url: pokemon.pokemon.url } key={pokemon.url} />
      ))}
    </div>
  );
};

export default Characters;
