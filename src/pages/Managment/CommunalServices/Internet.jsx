import { Typography, Grid, Box } from "@mui/material";
import { useSelector } from "react-redux";
import citynet from "../../../assets/communal/citynet_logo_1.png";
import Header from "../../../components/UI/Header";
import { Home } from "@mui/icons-material";

const phoneCategories = [
  {
    id: 1,
    title: "CityNet",
    img: citynet,
    path: "/",
  },
];

const Internet = () => {
  const { disableTransform } = useSelector((state) => state.themes);

  return (
    <div className={`w-full ${disableTransform ? "transform-none" : ""} `}>
      <Header currentPage={{ title: "Internet", icon: Home }} />
      <Grid container gap={2}>
        {phoneCategories.map(({ img, title }) => (
          <Grid
            xs={5.7}
            lg={3}
            item
            className="rounded cursor-pointer bg-slate-50 px-6 py-12 xs:h-52 flex items-center justify-center flex-col group bg-white drop-shadow-lg"
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

export default Internet;
