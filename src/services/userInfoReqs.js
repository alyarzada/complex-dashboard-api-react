import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");

const getUserInfo = async () => {
  try {
    const response = await axios.get(process.env.REACT_APP_API_URL + "auth", {
      headers: { token },
    });
    return response.data.user_data;
  } catch (error) {
    return error;
  }
};

const updateUserInfo = async (data) => {
  try {
    const response = await axios.patch(
      process.env.REACT_APP_API_URL + "auth",
      data.body,
      {
        headers: { token },
      }
    );
    return response.data.user_data;
  } catch (error) {
    return error.message;
  }
};

export { updateUserInfo, getUserInfo };
