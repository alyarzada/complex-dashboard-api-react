import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");

const loginHandler = async (data) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_API_URL + "auth",
      data
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

const logoutHandler = async (data) => {
  try {
    const response = await axios.delete(
      process.env.REACT_APP_API_URL + "auth",
      {
        headers: { token },
      }
    );
    return response;
  } catch (error) {
    return error.message;
  }
};

export { loginHandler, logoutHandler };
