import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");

const getContacts = async () => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_API_URL + "information",
      {
        headers: { token },
      }
    );
    return response.data.complex_employees;
  } catch (error) {
    return error;
  }
};

export { getContacts };
