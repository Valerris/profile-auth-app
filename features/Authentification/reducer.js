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
		logout(state) {
			state.loading = false;
			state.user = null;
			state.token = null;
			state.success = false;
			state.err = null;
		},
	},
	extraReducers: {
		[asyncFetchUser.pending](state) {
			state.loading = true;
			state.user = null;
			state.token = null;
			state.success = null;
			state.err = null;
		},
		[asyncFetchUser.fulfilled](state, { payload }) {
			state.loading = false;
			state.err = null;
			state.user = payload.user;
			state.token = payload.token;
			state.success = payload.success;

			console.log(`[reducer ${SLICE_NAME}]: ${payload.message}`);
		},
		[asyncFetchUser.rejected](state, { payload }) {
			state.loading = false;
			state.user = null;
			state.token = null;
			state.success = null;
			state.err = payload;

			console.error(`[reducer ${SLICE_NAME}]: ${payload.errMsg}`);
		},
	},
});

export const { logout } = slice.actions;

export default slice.reducer;
