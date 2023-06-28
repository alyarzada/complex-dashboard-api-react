import { Typography, Stack, Box } from "@mui/material";
import { useSelector } from "react-redux";
import azerisiq from "../../assets/communal/azerisiq.png";
import azerqaz from "../../assets/communal/azeriqaz2.png";
import azersu from "../../assets/communal/azersu.png";
import Header from "../../components/UI/Header";
import HomeIcon from "@mui/icons-material/Home";

const communals = [
  {
    id: 1,
    image: azerisiq,
    title: "Azərişıq",
  },
  {
    id: 2,
    image: azerqaz,
    title: "Azərqaz",
  },
  {
    id: 3,
    image: azersu,
    title: "Azərisu",
  },
];

const Communal = () => {
  const { disableTransform } = useSelector((state) => state.themes);
  return (
    <Box className={`w-full ${disableTransform ? "transform-none" : ""} `}>
      <Header currentPage={{ title: "Communal Services", icon: HomeIcon }} />
      <Stack
        className="gap-4"
        direction="row"
        sx={{ flexWrap: "wrap" }}
        spacing={3}
        max-w-full
      >
        {communals.map(({ id, image, title }) => (
          <Box
            key={id}
            className="w-2/5 xs:[w-47%] lg:w-1/4 flex items-center justify-center flex-col py-6 px-10 rounded-xl bg-slate-50 gap-y-4 drop-shadow-lg"
          >
            <img className="w-40" src={image} alt="azerisiq" />
            <Typography className="mt-4">{title}</Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Communal;
