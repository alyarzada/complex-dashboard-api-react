import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");

const getBookedRooms = async () => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_API_URL + "meeting",
      {
        headers: { token },
      }
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

const bookRoom = async (data) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_API_URL + "meeting",
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

const deleteBookedRoom = async (data) => {
  try {
    const response = await axios.delete(
      process.env.REACT_APP_API_URL + "meeting",
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

export { getBookedRooms, deleteBookedRoom, bookRoom };
