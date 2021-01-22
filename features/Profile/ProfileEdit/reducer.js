import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

const SLICE_NAME = "IMG_UPLOAD";

export const asyncUploadImage = createAsyncThunk(
	`${SLICE_NAME}/asyncUploadImage`,
	async (files, { rejectWithValue }) => {
		const file = files[0];
		console.log(file);
		const fd = new FormData();

		fd.append("file", file, file.name);

		const response = await fetch("/api/profile/edit/upload-file", {
			method: "POST",
			body: fd,
		});

		if (response.status < 200 || response.status > 299) {
			return rejectWithValue(response.statusText);
		}

		return response.json();
	}
);

const slice = createSlice({
	name: SLICE_NAME,
	initialState,
	reducers: {
		setLoading(state, action) {
			state.loading = true;
		},
		selectFile: (state, action) => {
			state.images = action.payload.name;
		},
	},
	extraReducers: {
		[asyncUploadImage.pending](state, action) {
			state.loading = true;
		},
		[asyncUploadImage.fulfilled](state, action) {
			state.loading = false;
			state.images = action.payload;
		},
		[asyncUploadImage.rejected](state, action) {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const { selectFile } = slice.actions;

export default slice.reducer;
