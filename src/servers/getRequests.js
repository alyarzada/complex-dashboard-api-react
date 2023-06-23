import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = "https://pbr.rahatbina.az/api/v1/";

const getUserInfo = async () => {
  try {
    const response = await axios.get(BASE_URL + "auth", {
      headers: { token: Cookies.get("token") },
    });
    return response.data.user_data;
  } catch (error) {
    return error;
  }
};

const getContacts = async () => {
  try {
    const response = await axios.get(BASE_URL + "information", {
      headers: { token: Cookies.get("token") },
    });
    return response.data.complex_employees;
  } catch (error) {
    return error;
  }
};

export { getContacts, getUserInfo };
