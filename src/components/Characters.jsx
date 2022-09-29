import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CharacterCard from "./CharacterCard";
import Header from "./Header";


const Characters = () => {
  const name = useSelector((state) => state.userName);
  const navigate = useNavigate()

  const [pokemonList, setPokemonList] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const [typesPokemon, setTypesPokemon] = useState([]);

  // paginated
  const [page, setPage] = useState(1);
  const pokemonsPerPage = 8;
  const lastIndex = page * pokemonsPerPage
  const firstIndex = lastIndex - pokemonsPerPage
  const pokemonsPaginated = pokemonList.slice(firstIndex, lastIndex)
  const lastPage = Math.ceil(pokemonList.length / pokemonsPerPage)

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1155")
      .then((res) => setPokemonList(res.data.results));

    axios.get("https://pokeapi.co/api/v2/type")
      .then(res => setTypesPokemon(res.data.results));

  }, []);

  const searchName = () => {
    navigate(`/characters/${nameInput}`)
  }

  const searchType = (typeUrl) => {
    axios.get(typeUrl)
      .then(res => setPokemonList(res.data.pokemon.map(pokemon => pokemon.pokemon)))
  }

  const changePageInput = e => {
    if(e.keyCode == 13){
      if(parseInt(e.target.value) <= lastPage ){
      setPage(parseInt(e.target.value))
      } else {
        alert("page wrong")
      } 
    }
  } 

  return (
    <div className="conteinerCharacter">

      <Header />

      <div className="conteinerCharacter--tittle">
        <h2> welcome </h2>
        <b> {name} </b>
      </div>


      <div className="conteinerCharacter--inputs">
        <input
          type="text"
          className="searchPokemon"
          value={nameInput}
          onChange={e => setNameInput(e.target.value)}
          placeholder="Search pokemon" />

        <button
          className="buttonSearchPokemon"
          onClick={searchName}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>

        <select
          name=""
          id=""
          className="select"
          onChange={e => searchType(e.target.value)}>
          <option value="">select pokemon type</option>
          {
            typesPokemon.map(type => (
              <option value={type.url} key={type.url}>{type.name}</option>
            ))
          }
        </select>
      </div>

      <ul className="conteinerCharacter--Card">
        {
          pokemonsPaginated.map((pokemon) => (
            <CharacterCard
              url={pokemon.url} key={pokemon.url} />
          ))
        }
      </ul>

      <div className="buttons">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}>
          <i className="fa-solid fa-backward"></i>
        </button>
        <input 
        type="text"
        placeholder="N°"
        className="buttons--input"
        value={page}
        onKeyDown={e => changePageInput(e)} />
        <p> of {lastPage} pages </p>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === lastPage}>
          <i className="fa-solid fa-forward"></i>
        </button>
      </div>

    </div>
  );
};

export default Characters;
