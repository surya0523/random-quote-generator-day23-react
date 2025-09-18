import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch random quote
export const fetchQuote = createAsyncThunk("quote/fetchQuote", async () => {
  const response = await axios.get("https://api.quotable.io/random");
  return response.data;
});

const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    quote: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuote.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuote.fulfilled, (state, action) => {
        state.loading = false;
        state.quote = action.payload;
      })
      .addCase(fetchQuote.rejected, (state, action) => {
        state.loading = false;
        state.error = "Failed to fetch quote!";
      });
  },
});

export default quoteSlice.reducer;
