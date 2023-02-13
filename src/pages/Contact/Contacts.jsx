import { useEffect } from "react";
import { Box } from "@mui/material";
import Contact from "./Contact";
import Header from "../../components/UI/Header";
import { useTranslation } from "react-i18next";
import PhoneIcon from "@mui/icons-material/Phone";
import { getAllContacts } from "../../app/Slicers/contacts";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";

const Contacts = () => {
  const dispatch = useDispatch();
  const { contacts, status } = useSelector((state) => state.contacts);
  const { t } = useTranslation();
  let skeletons = [];

  for (let i = 0; i < 10; i++) {
    skeletons.push(<Contact />);
  }

  useEffect(() => {
    dispatch(
      getAllContacts({
        token: Cookies.get("token"),
      })
    );
  }, []);

  return (
    <Box className="w-full">
      <Header currentPage={{ title: t(["Contact"]), icon: PhoneIcon }} />
      <Box className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 exl:grid-cols-5 gap-3">
        {status === "loading"
          ? skeletons
          : contacts?.length > 0
          ? contacts?.map((contact) => (
              <Contact key={contact.id} contact={contact} />
            ))
          : null}
      </Box>
    </Box>
  );
};

export default Contacts;
