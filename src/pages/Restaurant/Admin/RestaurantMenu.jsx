import React from 'react'
import {  useState } from "react";
import {  useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import CustomDataGrid from "../../../components/UI/CustomDataGrid";
import {
  Box,
  Stack,
  Typography,
  Button,
  Input,
} from "@mui/material";
import Header from "../../../components/UI/Header";
import { Link } from "react-router-dom";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


const RestaurantMenu = () => {
    const [tableRows, setTableRows] = useState(10);
    const dispatch = useDispatch();
    const [selectionModel, setSelectionModel] = useState([]);
    const { t } = useTranslation();
  

    const names = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder',
      ];
      

    const columns = [
      {
        field: "category",
        headerName: t("Category"),
        width: 200,
        flex:1,
      },
      {
        field: "menuname",
        headerName: t("Menu name"),
        width: 200,
        flex:1,
      },
      {
        field: "price",
        headerName: t("Price"),
        width: 200,
        flex:1,
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
            title: t(["Menu"]),
            icon: IndeterminateCheckBoxOutlinedIcon,
          }}
        />
        <Box className="py-6 px-6 my-4 rounded bg-bgLight drop-shadow-lg dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary w-full">
            <Box>
            <Typography className="text-logoColor pb-2">{t(["Category"])}</Typography>
        <FormControl sx={{ width: 400  }} className="w-full lg:w-[400px] mb-3 lg:mb-0">
        <InputLabel id="demo-multiple-name-label">{t(["Please select"])}</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          input={<OutlinedInput label="Name" />}
        >
       {(names)}
        </Select>
      </FormControl>
      </Box>
          <Box className="flex justify-end w-full">
            <Link to="/menucreate">
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
            <Box className="xs:flex flex-wrap justify-between items-center hidden w-full">
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
          <CustomDataGrid rows={[]} desktopColumns={columns} width={1170}  />
        </Box>
  
      </div>
    );
}

export default RestaurantMenu

