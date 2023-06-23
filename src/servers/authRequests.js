import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = "https://pbr.rahatbina.az/api/v1/";

const loginHandler = async (data) => {
  try {
    const response = await axios.post(BASE_URL + "auth", data);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

const logoutHandler = async (data) => {
  try {
    const response = await axios.delete(BASE_URL + "auth", {
      headers: { token: Cookies.get("token") },
    });
    return response;
  } catch (error) {
    return error.message;
  }
};

export { loginHandler, logoutHandler };
