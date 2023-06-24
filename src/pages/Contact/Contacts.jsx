import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { getContacts } from "../../services/getRequests";
import { Box } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import Contact from "./Contact";
import Header from "../../components/UI/Header";

const Contacts = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["informations"],
    queryFn: getContacts,
  });
  const { t } = useTranslation();

  if (isError) return <h1>{error.message}</h1>;

  return (
    <Box className="w-full">
      <Header currentPage={{ title: t(["Contact"]), icon: PhoneIcon }} />
      <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 exl:grid-cols-5 gap-3">
        {isLoading
          ? Array.from({ length: 10 }, () => <Contact isLoading={isLoading} />)
          : data?.map((contact) => (
              <Contact
                key={contact.id}
                contact={contact}
                isLoading={isLoading}
              />
            ))}
      </Box>
    </Box>
  );
};

export default Contacts;
