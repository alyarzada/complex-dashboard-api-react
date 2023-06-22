import { useState } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import CustomDataGrid from "../../../components/UI/CustomDataGrid";
import { Box, Stack, Typography, Button, Input } from "@mui/material";
import Header from "../../../components/UI/Header";
import { Link } from "react-router-dom";
import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";

const MenuCategories = () => {
  const [tableRows, setTableRows] = useState(10);
  const dispatch = useDispatch();
  const [selectionModel, setSelectionModel] = useState([]);
  const { t } = useTranslation();

  const columns = [
    {
      field: "category",
      headerName: t("Category"),
      width: 200,
      flex: 1,
    },
    {
      field: "action",
      headerName: t("Action"),
      width: 200,
    },
  ];

  const handleChange = (e) => {
    if (parseInt(e.target.value) <= 100) setTableRows(parseInt(e.target.value));
    else setTableRows(100);
  };
  return (
    <div>
      <Header
        currentPage={{
          title: "Menu categories",
          icon: IndeterminateCheckBoxOutlinedIcon,
        }}
      />
      <Box className="py-6 px-6 my-4 rounded bg-bgLight drop-shadow-lg dark:bg-bgMain w-full">
        <Box className="flex justify-end w-full">
          <Link to="/menunewcreate">
            <Button
              variant="contained"
              startIcon={<AddCircleOutlinedIcon />}
              className="capitalize bg-rose-500 text-white"
            >
              {t(["Create new"])}
            </Button>
          </Link>
        </Box>
        <Stack
          justifyContent="space-between"
          alignItems="center"
          direction="row"
          className="mb-4"
        >
          <Box className="xs:flex flex-wrap justify-between items-center hidden w-full ">
            <Typography className="font-semibold text-textDark2 dark:text-text2 text-[16px] my-5 flex gap-1 items-center">
              Sehifede
              <Input className="w-10" defaultValue={10} onChange={handleChange}>
                10
              </Input>
              netice goster
            </Typography>
            <Typography className="font-semibold text-textDark2 dark:text-text2 text-[16px] flex gap-1 items-center">
              {t("Search")}:<Input className="w-50">10</Input>
            </Typography>
          </Box>
        </Stack>
        <CustomDataGrid rows={[]} desktopColumns={columns} width={1170} />
      </Box>
    </div>
  );
};

export default MenuCategories;
