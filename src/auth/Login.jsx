import { Box } from "@mui/material";
import LoginTabPanel from "./LoginTabPanel";
import LoginImage from "../assets/login_photo.jpg";
import androidIcon from "../assets/logo/android.png";
import iosIcon from "../assets/logo/ios.png";
import qrcodeIcon from "../assets/logo/qrcode.png";

const LoginPage = () => {
  return (
    <Box className="flex h-screen overflow-hidden">
      <Box className="lg:hidden">
        <img
          className="w-screen h-screen object-cover object-top absolute block"
          src={LoginImage}
          alt="port-baku-img"
        />
      </Box>
      <Box className="lg:w-[450px] w-full bg-bgMain h-screen flex flex-col items-center justify-center relative p-8">
        <LoginTabPanel />
        <Box className=" hidden lg:flex justify-between items-center relative z-10">
          <img className="w-1/4" src={androidIcon} alt="android" />
          <img className="w-1/4" src={qrcodeIcon} alt="qrcode" />
          <img className="w-1/4" src={iosIcon} alt="ios" />
        </Box>
      </Box>

      <Box className="flex-1 h-full">
        <img
          className="w-full h-full object-cover object-top block"
          src={LoginImage}
          alt="port-baku-img"
        />
      </Box>
    </Box>
  );
};

export default LoginPage;
