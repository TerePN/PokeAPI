import { createSlice } from '@reduxjs/toolkit';


export const colorPokemonSlice = createSlice({
	name: 'colorPokemon',
    initialState: "",
    reducers: {
        changeColor:(state, action)=>{
            const colorPokemon = action.payload
            return colorPokemon
        }
    }
})

export const { changeColor } = colorPokemonSlice.actions;

export default colorPokemonSlice.reducer;