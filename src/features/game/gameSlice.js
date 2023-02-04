import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    catalogue: null,
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setGames: (state, action) => {
            state.catalogue = action.payload.catalogue;
        },
    },
});

export const { setGames } = gameSlice.actions;

export const selectCatalogue = (state) => state.game.catalogue;

export default gameSlice.reducer;