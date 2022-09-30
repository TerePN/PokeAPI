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
  const [inputPage, setInputPage] = useState(1)
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

///////////////////// paginated /////////////////////
  const onKeyInput = e => {
    if(e.keyCode == 13){
      setPage(parseInt(e.target.value))

      if(e.target.value < 1 || e.target.value > lastPage  || isNaN(e.target.value) ){
        setPage(1)
        setInputPage(1)
        alert("page wrong")
      } else {
        setPage(parseInt(e.target.value))
      } 
    }
  }
  
  const onChangeInput = (e) =>{
    setInputPage(e.target.value)
  }

  const nextPage = () => {
    setInputPage( parseInt(inputPage) + 1);
    setPage(page+1);
  }


  const previousPage = () => {
    setInputPage( parseInt(inputPage-1));
    setPage(page-1);
  }

  return (
    <div className="conteinerCharacter">

      <Header />

      <div className="conteinerCharacter--tittle">
        <h2>Welcome,<b> {name} </b> <span>here you can find your favorite pokemon</span> </h2>
      </div>


      <div className="conteinerCharacter--inputs">
        <input
          type="text"
          className="searchPokemon"
          value={nameInput}
          onChange={e => setNameInput(e.target.value.toLowerCase())}
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
          onClick={previousPage}
          disabled={page === 1}>
          <i className="fa-solid fa-backward"></i>
        </button>
        <input 
        type="text"
        placeholder="N°"
        className="buttons--input"
        value={ inputPage }
        onChange={e => onChangeInput(e)}
        onKeyDown={e => onKeyInput(e)} />
        <p> of {lastPage} pages </p>
        <button
          onClick={nextPage}
          disabled={page === lastPage}>
          <i className="fa-solid fa-forward"></i>
        </button>
      </div>

    </div>
  );
};

export default Characters;
