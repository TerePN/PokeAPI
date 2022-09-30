import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CharacterCard = ({ url }) => {

  const [pokemon, setPokemon] = useState({});
  const [pokemonBackground, setPokemonBackground] = useState("")
  const [pokemonColor, setPokemonColor] = useState("")
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(url)
      .then((res) => setPokemon(res.data));
  }, []);

// colors pokemon ////////////////////////
useEffect(() => {

  if (pokemon.types?.[0].type.name) {

    switch (pokemon.types?.[0].type.name) {

      case "normal":
        setPokemonColor("#64828D")
        setPokemonBackground("radial-gradient(circle at 23.41% 76.59%, #baced3 0, #b3c2c5 16.67%, #a9b0b0 33.33%, #9c9898 50%, #8e8182 66.67%, #846f73 83.33%, #7c646b 100%")
        break;
      case "fighting":
        setPokemonColor("#654008")
        setPokemonBackground("radial-gradient(circle at 54.06% 96.45%, #cc9400 0, #ce8500 10%, #cc7500 20%, #c66400 30%, #bb5100 40%, #ad3d00 50%, #9d2909 60%, #8e140f 70%, #810013 80%, #750016 90%, #6b0018 100%)")
        break;
      case "flying":
        setPokemonBackground("radial-gradient(circle at 0% 0%, #fffffe 0, #fffff3 16.67%, #fbf9e6 33.33%, #deded8 50%, #c4c3c9 66.67%, #b0abba 83.33%, #a196ad 100%")
        break;
      case "poison":
        setPokemonColor("#5B3184")
        setPokemonBackground("radial-gradient(circle at 50% -20.71%, #ff14a7 0, #ff00af 12.5%, #ff00b4 25%, #f900b4 37.5%, #d402af 50%, #af0ca8 62.5%, #8d15a0 75%, #6c1b9a 87.5%, #4c1f94 100%)")
        break;
      case "ground":
        setPokemonColor("#654008")
        setPokemonBackground("radial-gradient(circle at 31.7% 118.3%, #d0b250 0, #cca34c 12.5%, #c49248 25%, #b78045 37.5%, #a56d40 50%, #925b3b 62.5%, #814d37 75%, #714133 87.5%, #643730 100%)")
        break;
      case "rock":
        setPokemonColor("#7E7E7E")
        setPokemonBackground("radial-gradient(circle at 43.84% 120.44%, #b6c0d2 0, #b7bccd 6.25%, #b7b9c8 12.5%, #b5b5c1 18.75%, #b3b0ba 25%, #afacb2 31.25%, #a9a7aa 37.5%, #a1a2a1 43.75%, #989d99 50%, #8e9892 56.25%, #84948c 62.5%, #7a9088 68.75%, #708c86 75%, #688985 81.25%, #608685 87.5%, #598385 93.75%, #548187 100%)")
        break;
      case "bug":
        setPokemonColor("#265C25")
        setPokemonBackground("radial-gradient(circle at 20.12% 114.09%, #b5f837 0, #94f239 16.67%, #6ae937 33.33%, #1bdb34 50%, #00cd34 66.67%, #00c23c 83.33%, #00ba48 100%")
        break;
      case "ghost":
        setPokemonColor("#323569")
        setPokemonBackground("radial-gradient(circle at 46.74% 87.32%, #e130db 0, #c520df 12.5%, #a312e2 25%, #760be5 37.5%, #2010e7 50%, #001be8 62.5%, #0025ea 75%, #002cea 87.5%, #0030ea 100%)")
        break;
      case "steel":
        setPokemonColor("#666662")
        setPokemonBackground("radial-gradient(circle at 34.73% 82.75%, #e4d7ce 0, #bcc1c5 25%, #94a9bb 50%, #6c91b2 75%, #417ba9 100%)");
        break;
      case "fire":
        setPokemonColor("#E75C35")
        setPokemonBackground("linear-gradient(5deg, #f9af00 0, #ff9f00 8.33%, #ff8c00 16.67%, #ff7600 25%, #ff5d00 33.33%, #f74002 41.67%, #e51818 50%, #d00022 58.33%, #bd0028 66.67%, #ac002e 75%, #9c0034 83.33%, #8f003b 91.67%, #840043 100%)")
        break;
      case "water":
        setPokemonColor("#1479FB")
        setPokemonBackground("radial-gradient(circle at 50% 87.46%, #cfe1ff 0, #85aeff 25%, #3a79fa 50%, #0048a5 75%, #001d5b 100%)")
        break;
      case "grass":
        setPokemonColor("#416460")
        setPokemonBackground("radial-gradient(circle at 54.94% 106.46%, #fffb40 0, #fcfe43 7.14%, #e3fd49 14.29%, #c8fa51 21.43%, #abf55a 28.57%, #8cec63 35.71%, #6ae26a 42.86%, #42d470 50%, #00c675 57.14%, #00ba7a 64.29%, #00af7f 71.43%, #00a785 78.57%, #00a08c 85.71%, #009a94 92.86%, #00979c 100%)")
        break;
      case "electric":
        setPokemonColor("#CCBF08")
        setPokemonBackground("radial-gradient(circle at 44.55% 112.35%, #ffff31 0, #d5c505 50%, #807800 100%)")
        break;
      case "psychic":
        setPokemonColor("#A347A6")
        setPokemonBackground("radial-gradient(circle at 54.06% 96.45%, #ffd76d 0, #ffca73 8.33%, #ffbc78 16.67%, #ffad7c 25%, #ff9d7e 33.33%, #ff8d7e 41.67%, #fa7c7c 50%, #e16d78 58.33%, #ca6074 66.67%, #b65671 75%, #a44f6f 83.33%, #954a6e 91.67%, #89466d 100%)")
        break;
      case "ice":
        setPokemonColor("#6FBEDF")
        setPokemonBackground("radial-gradient(circle at 37.72% 119.64%, #f6ffff 0, #e6ffff 10%, #d3fffe 20%, #befffa 30%, #a6fff7 40%, #8afaf5 50%, #6af1f4 60%, #43e8f5 70%, #00dff7 80%, #00d7fa 90%, #00d0fe 100%")
        break;
      case "dragon":
        setPokemonColor("#276600")
        setPokemonBackground("radial-gradient(circle at 50% 87.46%, #856000 0, #786200 7.14%, #696100 14.29%, #585e00 21.43%, #455700 28.57%, #324f00 35.71%, #1d4301 42.86%, #063601 50%, #002900 57.14%, #002000 64.29%, #001800 71.43%, #001000 78.57%, #000600 85.71%, #000000 92.86%, #000000 100%)")
        break;
      case "dark":
        setPokemonBackground("radial-gradient(circle at 50% 73.72%, #003549 0, #003342 6.25%, #002f3a 12.5%, #002a32 18.75%, #012529 25%, #061f20 31.25%, #061817 37.5%, #030f0e 43.75%, #000000 50%, #000000 56.25%, #000000 62.5%, #000000 68.75%, #000000 75%, #000000 81.25%, #000000 87.5%, #000000 93.75%, #000000 100%")
        break;
      case "fairy":
        setPokemonColor("#CC2949")
        setPokemonBackground("radial-gradient(circle at 46.09% 72.19%, #f7e2b0 0, #fbddac 5.56%, #fed7a8 11.11%, #ffd0a4 16.67%, #ffc89f 22.22%, #ffbf9b 27.78%, #ffb497 33.33%, #ffa994 38.89%, #ff9d92 44.44%, #ff9090 50%, #fb8390 55.56%, #f67793 61.11%, #f06d97 66.67%, #e8659e 72.22%, #df5fa5 77.78%, #d55bae 83.33%, #c85bb7 88.89%, #ba5cc0 94.44%, #aa5fc9 100%")
        break;
      default:
        setPokemonBackground("radial-gradient(circle at 23.41% 76.59%, #baced3 0, #b3c2c5 16.67%, #a9b0b0 33.33%, #9c9898 50%, #8e8182 66.67%, #846f73 83.33%, #7c646b 100%")
        break;
    }
  }
}, [pokemon])

  const ChangeNavigate = () => {
    navigate(`/characters/${pokemon.id}`)
  }

  return (

    <div
      className="characterCard"
      onClick={ChangeNavigate}
      style={{ border: ` 5px solid ${pokemonColor}` }} >

      <div
        className="characterCard--header"
        style={{ backgroundImage: `${pokemonBackground}` }} >

        <img className="characterCard--img" src={pokemon.sprites?.front_default} alt="" />
      </div>

      <div className="characterCard--info" >
        <h3 className="info--h3" style={{ color: `${pokemonColor}` }} >{pokemon.name}</h3>
        <ul className="listType">
          {pokemon.types?.map(type => (
            <small className="listItems" key={type.type.name} >{type.type.name}</small>
          ))
          }
        </ul>

        <div>
          <small className="info--b" > {pokemon.stats?.[0].stat.name}  : </small>
          <b style={{ color: `${pokemonColor}` }} > {pokemon.stats?.[0].base_stat}  </b>
        </div>

        <div>
        <small className="info--b" > {pokemon.stats?.[1].stat.name}  : </small>
        <b style={{ color: `${pokemonColor}` }} > {pokemon.stats?.[1].base_stat}  </b>
        </div>

        <div>
        <small className="info--b" > {pokemon.stats?.[2].stat.name}  : </small>
        <b style={{ color: `${pokemonColor}` }} > {pokemon.stats?.[2].base_stat}  </b>
        </div>

        <div>
        <small className="info--b" > {pokemon.stats?.[5].stat.name}  : </small>
        <b style={{ color: `${pokemonColor}` }} > {pokemon.stats?.[5].base_stat}  </b>
        </div>

      </div>

    </div>
  );
};

export default CharacterCard;
