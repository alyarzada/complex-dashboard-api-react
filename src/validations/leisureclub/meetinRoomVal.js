import * as Yup from "yup";

export const BronMeetingRoomSchema = Yup.object().shape({
  start_date: Yup.string().required(),
  start_time: Yup.string().required(),
  duration: Yup.string().required(),
  meeting_room: Yup.string().required(),
});
