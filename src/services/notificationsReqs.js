import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");

const getAllNotifications = async () => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_API_URL + "notifications",
      {
        headers: { token },
      }
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

const deleteNotifications = async (data) => {
  try {
    const response = await axios.delete(
      process.env.REACT_APP_API_URL + "notifications",
      {
        headers: { token },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

export { getAllNotifications, deleteNotifications };
