import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const baseURL = 'http://localhost:4000/api/v1';

export const addDean = createAsyncThunk('deans/addDean', async(body) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${baseURL}/deans`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: token
    },
    body: JSON.stringify(body),
  })
  if(response.ok) {
    const data = await response.json()
    console.log(data);
    console.log(data.message)
    return data;
  } else {
    const data = await response.json()
    console.log(data.message)
  }
})

export const getDeanDetails = createAsyncThunk('deans/getDeanDetails', async(id) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${baseURL}/deans/${id}`, {
    headers: {
      authorization: token
    }
  })
  if(response.ok) {
    const data = await response.json()
    return data;
  }
})

export const getSchools = createAsyncThunk('schools/getSchools', async() => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${baseURL}/schools`, {
    headers: {
      Authorization: token,
    }
  })
  const schools = await response.json()
  return schools;
})

export const getDeanList = createAsyncThunk('schools/getDeanList', async() => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${baseURL}/dean_list`, {
    headers: {
      Authorization: token,
    }
  })
  const list = await response.json()
  return list;
})

export const getHodsList = createAsyncThunk('schools/getHodsList', async() => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${baseURL}/hods_list`, {
    headers: {
      Authorization: token,
    }
  })
  const list = await response.json()
  return list;
})

const initialState = {
  schools: [],
  deanList: [],
  details: "",
  hods: [],
}

const deanSlice = createSlice({
  name: 'deans',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getSchools.fulfilled, (state, action) => {
      state.schools = action.payload;
    });
    builder.addCase(getDeanDetails.fulfilled, (state, action) => {
      state.details = action.payload;
    });
    builder.addCase(getDeanList.fulfilled, (state, action) => {
      state.deanList = action.payload;
    })
    builder.addCase(getHodsList.fulfilled, (state, action) => {
      state.hods = action.payload;
    })
  }
})

export default deanSlice.reducer

