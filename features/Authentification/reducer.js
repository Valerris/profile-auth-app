import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

const SLICE_NAME = "AUTH";

export const asyncFetchUser = createAsyncThunk(
	`${SLICE_NAME}/asyncFetchUser`,
	async (payload, { rejectWithValue }) => {
		let err = 1;
		const { email, password } = payload;

		const fd = new FormData();

		fd.append("email", email);
		fd.append("password", password);

		const path = location.pathname;

		const response = await fetch(`/api/auth${path}`, {
			method: "POST",
			body: fd,
		});

		if (response.ok) {
			err = 0;
		}

		const data = await response.json();

		console.log(data);

		if (!err) {
			return Promise.resolve(data);
		} else {
			return rejectWithValue(data);
		}
	}
);

const slice = createSlice({
	name: SLICE_NAME,
	initialState,
	reducers: {
		setLoading(state) {
			state.loading = true;
		},
		setCredetials(state, { payload }) {
			state.user.email = payload.email;
			state.user.password = payload.password;
		},
	},
	extraReducers: {
		[asyncFetchUser.pending](state) {
			state.loading = true;
		},
		[asyncFetchUser.fulfilled](state, { payload }) {
			state.loading = false;
			state.user = payload;

			console.log(`[reducer ${SLICE_NAME}]: ${payload.message}`);
		},
		[asyncFetchUser.rejected](state, { payload }) {
			state.loading = false;
			state.err = payload;

			console.error(`[reducer ${SLICE_NAME}]: ${payload.errMessage}`);
		},
	},
});

export const { setCredetials } = slice.actions;

export default slice.reducer;
