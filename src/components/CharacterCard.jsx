import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CharacterCard = ({ url }) => {

  const [pokemon, setPokemon] = useState({});
  const [pokemonColor, setPokemonColor] = useState({})
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(url)
      .then((res) => setPokemon(res.data)); 
  }, []);

  // useEffect(() => {
  //   if(pokemon.id !==null){
  //   axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}/`)
  //     .then((res) => setPokemonColor(res.data.color.name));  
  //   }
  // }, [pokemon]);

  const ChangeNavigate = () => {
    navigate(`/characters/${pokemon.id}`)
  }

  return (
    <div className="characterCard" onClick={ChangeNavigate} style={{backgroundColor: `${pokemonColor}` }}>
      <div className="characterCard--header"></div>
      <div>
        <img src={pokemon.sprites?.front_default} alt="" />
        <h3>{pokemon.name}</h3>
        <h4> {pokemon.types?.[0].type.name} </h4>
        <b> {pokemon.stats?.[0].stat.name}  : {pokemon.stats?.[0].base_stat}  </b>
        <b> {pokemon.stats?.[1].stat.name}  : {pokemon.stats?.[1].base_stat}  </b>
        <b> {pokemon.stats?.[2].stat.name}  : {pokemon.stats?.[2].base_stat}  </b>
        <b> {pokemon.stats?.[5].stat.name}  : {pokemon.stats?.[5].base_stat}  </b>
      </div>
    </div>

  );
};

export default CharacterCard;
