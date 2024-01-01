import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const baseURL = "http://localhost:4000/api/v1";

export const addHod = createAsyncThunk('hods/addHods', async(body) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${baseURL}/hods`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: token
    },
    body: JSON.stringify(body),
  })
  if(response.ok) {
    const data = await response.json()
    return data;
  }
})

export const getHods = createAsyncThunk('hods/getHods', async() => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${baseURL}/hods`, {
    headers: {
      authorization: token
    }
  })
  if(response.ok) {
    const data = await response.json()
    return data;
  }
})

export const getHodDetails = createAsyncThunk('hods/getHodDetails', async(id) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${baseURL}/hods/${id}`, {
    headers: {
      authorization: token
    }
  })
  if(response.ok) {
    const data = await response.json()
    return data;
  }
})

export const updateHod = createAsyncThunk('hods/updateHod', async({ body, id }) => {
  const token = localStorage.getItem('token')
  const response = await fetch(`${baseURL}/hods/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
    },
    body: JSON.stringify(body)
  })
  if(response.ok) {
    const data = await response.json();
    console.log("update succesful")
    return data;
  }
})

const initialState = {
  hods: [],
  details: '',
}

const hodSlice = createSlice({
  name: 'hods',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getHods.fulfilled, (state, action) => {
      state.hods = action.payload
    })
    builder.addCase(getHodDetails.fulfilled, (state, action) => {
      state.details = action.payload
    })
  }
})

export default hodSlice.reducer;