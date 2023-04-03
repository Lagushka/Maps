import { createSlice } from "@reduxjs/toolkit"

export interface APILoadedState {
  APILoaded: boolean
}

const initialState: APILoadedState = {
  APILoaded: false
}

export const APILoadedSlice = createSlice({
  name: "APILoaded",
  initialState,
  reducers: {
    switched: (state) => {
      state.APILoaded = true
    }
  }
})

export const { switched } = APILoadedSlice.actions
export default APILoadedSlice.reducer