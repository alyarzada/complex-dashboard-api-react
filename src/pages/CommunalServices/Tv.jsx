import { Typography, Grid, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { Home } from "@mui/icons-material";
import bbtv from "../../assets/communal/bbtv.png";
import Header from "../../components/UI/Header";

const phoneCategories = [
  {
    id: 1,
    title: "B&B TV",
    img: bbtv,
    path: "",
  },
];

const Tv = () => {
  const { disableTransform } = useSelector((state) => state.themes);

  return (
    <div className={`w-full ${disableTransform ? "transform-none" : ""} `}>
      <Header currentPage={{ title: "Tv", icon: Home }} />;
      <Grid container gap={2}>
        {phoneCategories.map(({ img, title }) => (
          <Grid
            xs={5.7}
            lg={3}
            item
            className="rounded-xl cursor-pointer bg-slate-50 px-6 py-12 xs:h-52 flex items-center justify-center flex-col group"
          >
            <Box className="max-w-[12rem] h-[100px] m-auto flex items-center justify-center">
              <img
                src={img}
                alt={title}
                className="max-w-[82%] max-h-[6rem] align-middle  mb-6 transition-transform duration-300 group-hover:-translate-y-2"
              />
            </Box>

            <Typography>{title}</Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Tv;
