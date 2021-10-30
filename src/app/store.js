import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import movieSlice from '../features/movieSlice';

const store = configureStore({
    reducer:{
        users:  userSlice,
        movie:  movieSlice
    }
})

export default store