import { useSelector } from "react-redux";
import {
  Box,
  Stack,
  Typography,
  Breadcrumbs,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import CustomTextField from "../../components/Form/CustomTextField";
import CustomSelect from "../../components/Form/CustomSelect";
import CustomComplexSelection from "../../components/UI/CustomComplexSelection";

const optionsProj = [
  { label: "Port Baku Residence", value: "portbaku" },
  { label: "Absheron Apartments", value: "absheron" },
  { label: "Bilgah Estate", value: "bilgah" },
  { label: "Crescent", value: "crescent" },
  { label: "Baku City Villas", value: "bakucity" },
  { label: "Expo Center", value: "expo" },
  { label: "Crescent", value: "crescent" },
];

const NewParkingCard = () => {
  const { role_id } = useSelector((state) => state.user);
  const { t } = useTranslation();

  return (
    <Box>
      <Box className="flex justify-between mb-6">
        <h4 className="text-textDark2 dark:text-white font-medium">
          {t("giriskarti")}
        </h4>
        <Box className="hidden lg:block">
          <Stack spacing={2}>
            <Breadcrumbs
              separator={
                <NavigateNextIcon fontSize="small" className="text-logoColor" />
              }
              aria-label="breadcrumb"
            >
              <Link underline="hover" key="1" to="/" className="text-logoColor">
                {t(["Home"])}
              </Link>
              <Link underline="hover" key="1" to="/" className="text-logoColor">
                Giris kartlari
              </Link>
              <Link underline="hover" key="1" to="/" className="text-logoColor">
                Giris karti
              </Link>
              <Typography underline="hover" key="2" className="text-[#aab8c5]">
                Yenisini yaradin
              </Typography>
            </Breadcrumbs>
          </Stack>
        </Box>
      </Box>

      <Box className="bg-bgLight dark:bg-bgMain">
        <Formik
          initialValues={{
            request: "",
            newCard: "",
            amount: "",
            comment: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {() => (
            <Form>
              <Box className="p-6">
                {role_id === 4 ? <CustomComplexSelection /> : null}
                <CustomTextField
                  readOnly
                  label={t(["Request"])}
                  name="request"
                />
                <CustomSelect
                  name="newCard"
                  options={optionsProj}
                  label="Yeni kart"
                />
                <CustomTextField name="amount" label="Sayi" />
                <CustomTextField name="comment" label="Serhiniz" />
              </Box>
              <FormControl className="px-6 mb-6">
                <FormLabel id="demo-radio-buttons-group-label">
                  Status
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="hazir"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="hazir"
                    control={<Radio />}
                    label="Hazir"
                    sx={{ color: "text.secondary" }}
                  />
                  <FormControlLabel
                    value="Gozleme"
                    control={<Radio />}
                    label="Gozleme"
                    sx={{ color: "text.secondary" }}
                  />
                </RadioGroup>
              </FormControl>
              <Stack
                className="bg-slate-600 px-6 py-4"
                direction="row"
                justifyContent="space-between"
              >
                <Button startIcon={<ReplyOutlinedIcon />} variant="contained">
                  {t("geri")}
                </Button>
                <Button startIcon={<TaskAltOutlinedIcon />} variant="contained">
                  {t("yarat")}
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default NewParkingCard;
