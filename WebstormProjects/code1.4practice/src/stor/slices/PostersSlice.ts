// import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
// import {PostersSlice, Data} from "../../interfaces/MainInterface.ts";
//
// const initialState: PostersSlice = {
//     posts: []
// };
//
// export const fetchPosters = createAsyncThunk<Data[]>(
//     'posters/fetchPosters',
//     async () => {
//         const response = await fetch("http://localhost:3000/posts");
//         const jsondata: Data[] = await response.json();
//         console.log(jsondata);
//         return jsondata;
//     }
// )
//
// const counterSlice = createSlice({
//     name: 'postersSlice',
//     initialState,
//     reducers: {
//
//     },
// });
//
//
// export const {} = counterSlice.actions;
// export default counterSlice.reducer;