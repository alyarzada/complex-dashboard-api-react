import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = "https://pbr.rahatbina.az/api/v1/";

const updateUserInfo = async (data) => {
  try {
    const response = await axios.patch(BASE_URL + "auth", data.body, {
      headers: { token: Cookies.get("token") },
    });
    return response.data.user_data;
  } catch (error) {
    return error.message;
  }
};

export { updateUserInfo };
