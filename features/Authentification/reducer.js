import { createSlice } from "@reduxjs/toolkit";

const SLICE_NAME = "AUTH";
const initialState = {
	loading: false,
};

const slice = createSlice({
	name: SLICE_NAME,
	initialState,
	reducers: {
		setLoading(state, action) {
			state.loading = true;
		},
	},
});

export default slice.reducer;
