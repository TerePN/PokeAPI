import { configureStore } from '@reduxjs/toolkit'
import userNameSlice from './slice/userName.slice'
import colorPokemonSlice from './slice/colorPokemon.slice'

export default configureStore({
  reducer: {
    userName:userNameSlice,
    colorPokemon:colorPokemonSlice
	}
})