import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allRequests: [],
  myRequests: [],
  myRequestDetails: null,
  comments: [],
  loading: false,
  error: null,
  confirmStatus: "idle",
};

export const sendConfirmRequest = createAsyncThunk(
  "requests/sendConfirmRequest",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URL + "rform",
        data.body,
        {
          headers: { token: data.token },
        }
      );
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const sendFormRequest = createAsyncThunk(
  "requests/sendFormRequest",
  async (data) => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URL + "rform",
        data.body,
        {
          headers: { token: data.token },
        }
      );
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const sendCardRequest = createAsyncThunk(
  "requests/sendCardRequest",
  async (data) => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URL + "card",
        data.body,
        {
          headers: { token: data.token },
        }
      );
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const getMyRequests = createAsyncThunk(
  "requests/getMyRequests",
  async (data) => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + "rform",
        {
          headers: { token: data },
        }
      );
      return response.data.data;
    } catch (error) {
      return error;
    }
  }
);

export const getAllRequests = createAsyncThunk(
  "requests/getAllRequests",
  async (data) => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + "rform",
        {
          headers: { token: data, limit: 200 },
        }
      );
      return response.data.data;
    } catch (error) {
      return error;
    }
  }
);

export const createNewRequest = createAsyncThunk(
  "requests/createNewRequest",
  async (data) => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URL + "rform",
        data.body,
        {
          headers: { token: data.token },
        }
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const sendRequestComment = createAsyncThunk(
  "requests/sendRequestComment",
  async (data) => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URL + "rform/comment",
        data.body,
        {
          headers: { token: data.token },
        }
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const getRequestDetails = createAsyncThunk(
  "requests/getRequestDetails",
  async (data) => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + "rform/details",
        {
          headers: { token: data.token, reqId: data.body.reqId },
        }
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const requestSlicer = createSlice({
  name: "requests",
  initialState: initialState,
  reducers: {
    changeConfirmStatus: (state, action) => {
      state.confirmStatus = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMyRequests.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMyRequests.fulfilled, (state, action) => {
        state.loading = false;
        state.myRequests = action.payload;
      })
      .addCase(getMyRequests.rejected, (state) => {
        state.loading = false;
        state.error = "error";
      })
      .addCase(getAllRequests.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(getAllRequests.fulfilled, (state, action) => {
        state.loading = false;
        state.allRequests = action.payload;
      })
      .addCase(getAllRequests.rejected, (state) => {
        state.loading = false;
        state.error = "error";
      })
      .addCase(createNewRequest.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(createNewRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.allRequests = {
          ...state.allRequests,
          data: [action.payload.data, ...state.allRequests.data],
        };
      })
      .addCase(createNewRequest.rejected, (state) => {
        state.loading = false;
        state.error = "error";
      })
      .addCase(sendRequestComment.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(sendRequestComment.fulfilled, (state, action) => {
        state.loading = false;
        state.myRequestDetails = {
          ...state.myRequestDetails,
          comments: [
            ...state.myRequestDetails.comments,
            {
              message: action.payload.comments,
            },
          ],
        };
      })
      .addCase(sendRequestComment.rejected, (state) => {
        state.loading = false;
        state.error = "error";
      })
      .addCase(getRequestDetails.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(getRequestDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.myRequestDetails = action.payload;
      })
      .addCase(getRequestDetails.rejected, (state) => {
        state.loading = false;
        state.error = "error";
      })
      .addCase(sendFormRequest.pending, (state) => {
        state.confirmStatus = "loading";
      })
      .addCase(sendFormRequest.fulfilled, (state) => {
        state.confirmStatus = "succeeded";
      })
      .addCase(sendFormRequest.rejected, (state) => {
        state.confirmStatus = "failed";
        state.error = "error";
      })
      .addCase(sendConfirmRequest.pending, (state) => {
        state.confirmStatus = "loading";
      })
      .addCase(sendConfirmRequest.fulfilled, (state) => {
        state.confirmStatus = "succeeded";
      })
      .addCase(sendConfirmRequest.rejected, (state) => {
        state.confirmStatus = "failed";
      })
      .addCase(sendCardRequest.pending, (state) => {
        state.confirmStatus = "loading";
      })
      .addCase(sendCardRequest.fulfilled, (state) => {
        state.confirmStatus = "succeeded";
      })
      .addCase(sendCardRequest.rejected, (state) => {
        state.confirmStatus = "failed";
      });
  },
});

export const { changeConfirmStatus } = requestSlicer.actions;
export default requestSlicer.reducer;
