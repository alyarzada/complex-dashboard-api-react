import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  news: [],
  loading: false,
  error: null,
};

export const getAllNews = createAsyncThunk("news/getAllNews", async (data) => {
  try {
    const response = await axios.get(process.env.REACT_APP_API_URL + "wall", {
      headers: { token: data },
    });
    return response.data;
  } catch (error) {
    return error;
  }
});

export const postComment = createAsyncThunk(
  "news/postComment",
  async (data) => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URL + "wall/comment",
        data.body,
        {
          headers: { token: data.token },
        }
      );
      return response.data.data.post_saved_data;
    } catch (error) {
      return error;
    }
  }
);

export const deleteComment = createAsyncThunk(
  "news/deleteComment",
  async (data) => {
    try {
      const response = await axios.delete(
        process.env.REACT_APP_API_URL + "wall/comment",
        {
          data: data.id,
          headers: { token: data.token },
        }
      );
      return response.data.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const editComment = createAsyncThunk(
  "news/editComment",
  async (data) => {
    try {
      const response = await axios.patch(
        process.env.REACT_APP_API_URL + "wall/comment",
        data.body,
        {
          headers: { token: data.token },
        }
      );
      return response.data.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const likePost = createAsyncThunk("news/editComment", async (data) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_API_URL + "wall/like",
      data.body,
      {
        headers: { token: data.token },
      }
    );
    return response;
  } catch (error) {
    return error.message;
  }
});

export const newsSlicer = createSlice({
  name: "news",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllNews.fulfilled, (state, action) => {
        state.loading = false;
        state.news = action.payload;
      })
      .addCase(getAllNews.rejected, (state) => {
        state.loading = false;
        state.error = "error";
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.loading = false;
        state.news = state.news.map((item) => {
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
        state.loading = false;
        state.error = "error";
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.loading = false;
        state.news = state.news.map((item) => {
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
        state.loading = false;
        state.error = "error";
      })
      .addCase(editComment.fulfilled, (state, action) => {
        state.loading = false;
        state.news = state.news.map((item) => {
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
        state.loading = false;
        state.error = "error";
      });
  },
});

export const {} = newsSlicer.actions;
export default newsSlicer.reducer;
