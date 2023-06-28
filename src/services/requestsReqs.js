import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");

const getAllRequests = async (data) => {
  try {
    const response = await axios.get(process.env.REACT_APP_API_URL + "rform", {
      headers: { token, limit: 200 },
    });
    return response.data.data;
  } catch (error) {
    return error;
  }
};

const sendConfirmRequest = async (data) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_API_URL + "rform",
      data.body,
      {
        headers: { token },
      }
    );
    return response;
  } catch (err) {
    return err.message;
  }
};

const sendFormRequest = async (data) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_API_URL + "rform",
      data.body,
      {
        headers: { token },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

const sendCardRequest = async (data) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_API_URL + "card",
      data.body,
      {
        headers: { token },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

const createNewRequest = async (data) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_API_URL + "rform",
      data.body,
      {
        headers: { token },
      }
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

const sendRequestComment = async (data) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_API_URL + "rform/comment",
      data.body,
      {
        headers: { token },
      }
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

const getRequestDetails = async (data) => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_API_URL + "rform/details",
      {
        headers: { token, reqId: data.body.reqId },
      }
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export {
  getAllRequests,
  getRequestDetails,
  createNewRequest,
  sendCardRequest,
  sendRequestComment,
  sendFormRequest,
  sendConfirmRequest,
};

//  .addCase(createNewRequest.fulfilled, (state, action) => {
//       state.loading = false;
//       state.allRequests = {
//         ...state.allRequests,
//         data: [action.payload.data, ...state.allRequests.data],
//       };
//     })

//  .addCase(sendConfirmRequest.pending, (state) => {
//         state.confirmStatus = "loading";
//       })
//       .addCase(sendConfirmRequest.fulfilled, (state) => {
//         state.confirmStatus = "succeeded";
//       })
//       .addCase(sendConfirmRequest.rejected, (state) => {
//         state.confirmStatus = "failed";
//       })

//  .addCase(sendRequestComment.fulfilled, (state, action) => {
//         state.loading = false;
//         state.myRequestDetails = {
//           ...state.myRequestDetails,
//           comments: [
//             ...state.myRequestDetails.comments,
//             {
//               message: action.payload.comments,
//             },
//           ],
//         };
//       })
