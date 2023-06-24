import axios from "axios";
import Cookies from "js-cookie";

const getUserInfo = async () => {
  try {
    const response = await axios.get(process.env.REACT_APP_API_URL + "auth", {
      headers: { token: Cookies.get("token") },
    });
    return response.data.user_data;
  } catch (error) {
    return error;
  }
};

const getContacts = async () => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_API_URL + "information",
      {
        headers: { token: Cookies.get("token") },
      }
    );
    return response.data.complex_employees;
  } catch (error) {
    return error;
  }
};

export { getContacts, getUserInfo };
