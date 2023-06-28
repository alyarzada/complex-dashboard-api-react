import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");

const getAllPosts = async () => {
  try {
    const response = await axios.get(process.env.REACT_APP_API_URL + "wall", {
      headers: { token },
    });
    return response.data;
  } catch (error) {
    return error.message;
  }
};

const likePost = async (data) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_API_URL + "wall/like",
      data.body,
      {
        headers: { token },
      }
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

const postComment = async (data) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_API_URL + "wall/comment",
      data.body,
      {
        headers: { token },
      }
    );
    return response.data.data.post_saved_data;
  } catch (error) {
    return error.message;
  }
};

const deleteComment = async (data) => {
  try {
    const response = await axios.delete(
      process.env.REACT_APP_API_URL + "wall/comment",
      {
        data: data.id,
        headers: { token },
      }
    );
    return response.data.data;
  } catch (error) {
    return error.message;
  }
};

const editComment = async (data) => {
  try {
    const response = await axios.patch(
      process.env.REACT_APP_API_URL + "wall/comment",
      data.body,
      {
        headers: { token },
      }
    );
    return response.data.data;
  } catch (error) {
    return error.message;
  }
};

export { getAllPosts, postComment, editComment, deleteComment, likePost };
