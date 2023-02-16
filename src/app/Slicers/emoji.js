import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://pbr.rahatbina.az/api/v1/";

const initialState = {
  emoji: { id: null, name: null, emoji: null },
  status: "idle",
  error: null,
};

export const getAllNews = createAsyncThunk(
  "emojies/getAllNews",
  async (data) => {
    try {
      const response = await axios.get(BASE_URL + "wall", {
        headers: { token: data },
      });
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const postComment = createAsyncThunk(
  "emojies/postComment",
  async (data) => {
    try {
      const response = await axios.post(BASE_URL + "wall/comment", data.body, {
        headers: { token: data.token },
      });
      return response.data.data.post_saved_data;
    } catch (error) {
      return error;
    }
  }
);

export const deleteComment = createAsyncThunk(
  "emojies/deleteComment",
  async (data) => {
    try {
      const response = await axios.delete(BASE_URL + "wall/comment", {
        data: data.id,
        headers: { token: data.token },
      });
      return response.data.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const editComment = createAsyncThunk(
  "emojies/editComment",
  async (data) => {
    try {
      const response = await axios.patch(BASE_URL + "wall/comment", data.body, {
        headers: { token: data.token },
      });
      return response.data.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const likePost = createAsyncThunk(
  "emojies/editComment",
  async (data) => {
    try {
      const response = await axios.post(BASE_URL + "wall/like", data.body, {
        headers: { token: data.token },
      });
      return response;
    } catch (error) {
      return error.message;
    }
  }
);

export const emojiSlicer = createSlice({
  name: "emojies",
  initialState: initialState,
  reducers: {
    setEmoji: (state, action) => {
      state.emoji = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.emojies = action.payload;
      })
      .addCase(getAllNews.rejected, (state) => {
        state.status = "failed";
        state.error = "error";
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.emojies = state.emojies.map((item) => {
          if (item.id === action.payload.post_id) {
            return {
              ...item,
              comments: [...item.comments, action.payload],
            };
          }

          return item;
        });
      })
      .addCase(postComment.rejected, (state) => {
        state.status = "failed";
        state.error = "error";
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.emojies = state.emojies.map((item) => {
          if (item.id === action.payload.post_id) {
            return {
              ...item,
              comments: item.comments.filter(
                (item) => item.id !== action.payload.comment_id
              ),
            };
          }

          return item;
        });
        state.error = "error";
      })
      .addCase(deleteComment.rejected, (state) => {
        state.status = "failed";
        state.error = "error";
      })
      .addCase(editComment.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.emojies = state.emojies.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              comments: item.comments.map((comment) => {
                if (comment.id === action.payload.post_id) {
                  return {
                    ...comment,
                    comment: action.payload.post_saved_data,
                  };
                }
                return comment;
              }),
            };
          }

          return item;
        });
        state.error = "error";
      })
      .addCase(editComment.rejected, (state) => {
        state.status = "failed";
        state.error = "error";
      });
  },
});

export const { setEmoji } = emojiSlicer.actions;
export default emojiSlicer.reducer;
