import { useEffect } from "react";
import { Box } from "@mui/material";
import Contact from "./Contact";
import Header from "../../components/UI/Header";
import { useTranslation } from "react-i18next";
import PhoneIcon from "@mui/icons-material/Phone";
import { getAllContacts } from "../../app/Slicers/dataFetching/contacts";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";

const Contacts = () => {
  const dispatch = useDispatch();
  const { contacts, loading } = useSelector((state) => state.contacts);
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
  }, [dispatch]);

  return (
    <Box className="w-full">
      <Header currentPage={{ title: t(["Contact"]), icon: PhoneIcon }} />
      <Box className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 exl:grid-cols-5 gap-3">
        {loading
          ? skeletons
          : contacts?.map((contact) => (
              <Contact key={contact.id} contact={contact} />
            ))}
      </Box>
    </Box>
  );
};

export default Contacts;
