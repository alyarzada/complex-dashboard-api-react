import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");

const getBookedMassage = async (data) => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_API_URL + "massage",
      {
        headers: { token },
      }
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

const bookMassage = async (data) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_API_URL + "massage",
      data.data,
      {
        headers: { token },
      }
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

const deleteMassageReservation = async (data) => {
  try {
    const response = await axios.delete(
      process.env.REACT_APP_API_URL + "massage",
      {
        data: { id: data.id },
        headers: { token },
      }
    );
    return { response: response.data, id: data.id };
  } catch (error) {
    return error.message;
  }
};

export { getBookedMassage, deleteMassageReservation, bookMassage };
