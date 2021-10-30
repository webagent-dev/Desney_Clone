import { createSlice } from '@reduxjs/toolkit'

const initialState ={
      new: null,
      recom: null,
      original: null,
      trending: null,
}
const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovieData: (state, action ) => {
                state.new = action.payload.new
                state.recom = action.payload.recom
                state.original = action.payload.original
                state.trending = action.payload.trending
        }
    }
});

export const {
   setMovieData
} = movieSlice.actions

export const selectNew = state => state.movie.new
export const selectRecom = state => state.movie.recom
export const selectOriginal = state => state.movie.original
export const selectTrend = state => state.movie.trending
export default movieSlice.reducer