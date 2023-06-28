import { Typography, Grid, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { Home } from "@mui/icons-material";
import azeurotel from "../../assets/PhoneCategories/azeurot_logo.png";
import baktelecom from "../../assets/PhoneCategories/aztelekombtrb.png";
import ultel from "../../assets/PhoneCategories/ultel.png";
import catel from "../../assets/PhoneCategories/catel.png";
import transeurocom from "../../assets/PhoneCategories/transeurocom.png";
import Header from "../../components/UI/Header";

const phoneCategories = [
  {
    id: 1,
    title: "AzEuroTel",
    img: azeurotel,
    path: "",
  },
  {
    id: 2,
    title: "Baktelecom/Aztelekom",
    img: baktelecom,
    path: "",
  },
  {
    id: 3,
    title: "Catel",
    img: catel,
    path: "",
  },
  {
    id: 4,
    title: "transeurocom",
    img: transeurocom,
    path: "",
  },
  {
    id: 5,
    title: "Ultel",
    img: ultel,
    path: "",
  },
];

const Phone = () => {
  const { disableTransform } = useSelector((state) => state.themes);
  return (
    <div className={`w-full ${disableTransform ? "transform-none" : ""} `}>
      <Header currentPage={{ title: "Telephone", icon: Home }} />
      <Grid container gap={1.8} className="lg:pl-6">
        {phoneCategories.map(({ img, title }) => (
          <Grid
            xs={5.7}
            md={2.7}
            lg={2.8}
            xlg={2.9}
            item
            className="rounded-xl cursor-pointer bg-slate-50 px-6 py-12 xs:h-52 gap-1 flex items-center justify-center flex-col group drop-shadow-lg bg-white"
          >
            <Box className="max-w-[12rem] h-[100px] m-auto flex items-center justify-center">
              <img
                src={img}
                alt={title}
                className="max-w-[82%] max-h-[6rem] align-middle mb-6 transition-transform duration-300 group-hover:-translate-y-2"
              />
            </Box>

            <Typography>{title}</Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Phone;
