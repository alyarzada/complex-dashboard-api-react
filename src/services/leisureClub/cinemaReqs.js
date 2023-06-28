import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");

const getBookedCinemaRooms = async (data) => {
  try {
    const response = await axios.get(process.env.REACT_APP_API_URL + "cinema", {
      headers: { token },
    });
    return response.data;
  } catch (error) {
    return error.message;
  }
};

const bookCinemaRoom = async (data) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_API_URL + "cinema",
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

const deleteBookedCinemaRoom = async (data) => {
  try {
    const response = await axios.delete(
      process.env.REACT_APP_API_URL + "cinema",
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

export { deleteBookedCinemaRoom, bookCinemaRoom, getBookedCinemaRooms };
