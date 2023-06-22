import Header from "../../../components/UI/Header";
import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined";
import { useTranslation } from "react-i18next";
import { Box, Stack, Typography, Input } from "@mui/material";
import { useState } from "react";
import CustomDataGrid from "../../../components/UI/CustomDataGrid";

const RestaurantOrders = () => {
  const { t } = useTranslation();
  const handleChange = (e) => {
    if (parseInt(e.target.value) <= 100) setTableRows(parseInt(e.target.value));
    else setTableRows(100);
  };
  const [tableRows, setTableRows] = useState(10);

  const columns = [
    {
      field: "customerdAdress",
      headerName: t("Customer address"),
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "theAmountToBePaid",
      headerName: t("The amount to be paid"),
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "orderCode",
      headerName: t("Order code"),
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "orderDate",
      headerName: t("Order date"),
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "orderType",
      headerName: t("Order type"),
      flex: 1,
      headerAlign: "center",
    },
  ];

  return (
    <Box>
      <Header
        className="md:flex-column"
        currentPage={{
          title: t("Orders"),
          icon: IndeterminateCheckBoxOutlinedIcon,
        }}
      />
      <Box className="py-6 px-6 my-4 rounded bg-bgLight drop-shadow-lg dark:bg-bgMain w-full">
        <Stack
          justifyContent="space-between"
          alignItems="center"
          direction="row"
          className="mb-4"
        >
          <Box className="xs:flex flex-wrap justify-between items-center hidden w-full">
            <Typography className="font-semibold text-textDark2 dark:text-text2 text-[16px] my-5 flex gap-1 items-center">
              {t("On the page")}
              <Input className="w-10" defaultValue={10} onChange={handleChange}>
                10
              </Input>
              {t("show results")}
            </Typography>
            <Typography className="font-semibold text-textDark2 dark:text-text2 text-[16px] flex gap-1 items-center">
              {t("Search")}:<Input className="w-50">10</Input>
            </Typography>
          </Box>
        </Stack>
        <CustomDataGrid rows={[]} desktopColumns={columns} />
      </Box>
    </Box>
  );
};

export default RestaurantOrders;
