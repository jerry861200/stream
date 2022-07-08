import { createSlice } from "@reduxjs/toolkit";

import streams from "../apis/stream";

const streamSlice = createSlice({
  name: "stream",
  initialState: {
		stream: null,
	},
  reducers: {
    createStream: (state, {payload}) => {
      state.stream[payload.id] = payload;
    },
    fetchStream: (state, {payload}) => {
      state.stream[payload.id] = payload;
    },
    fetchStreams: (state, {payload}) => {
      state.stream = payload; // [{}]
    },
    editStream: (state, {payload}) => {
      state.stream[payload.id] = payload;
    },
    deleteStream: (state, {payload}) => {
      state.stream[payload.id] = undefined;
    },
  },
});

export const {
  createStream,
  fetchStream,
  fetchStreams,
  editStream,
  deleteStream,
} = streamSlice.actions;

export default streamSlice.reducer;

export const asyncCreateStream = (formValues) => async (dispatch) => {
  const response = await streams.post("/streams", formValues);
  dispatch(createStream(response.data));
};

export const asyncFetchStreams = () => async (dispatch) => {
  const response = await streams.get("/streams");
  dispatch(fetchStreams(response.data));
};

export const asyncFetchStream = (id) => async (dispatch) => {
  const response = await streams.get(`/streams/${id}`);
  dispatch(fetchStream(response.data));
};

export const asyncDeleteStream = (id) => async (dispatch) => {
  await streams.delete(`/streams/${id}`);
  dispatch(deleteStream(id));
};

export const asyncEditStream = (id, formValues) => async (dispatch) => {
  const response = await streams.put(`/streams/${id}`, formValues);
  dispatch(editStream(response.data));
};
