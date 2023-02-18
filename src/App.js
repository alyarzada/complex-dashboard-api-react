import { useEffect, Suspense } from "react";
import { useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import { Box } from "@mui/material";
import routes from "./routes/routes";
import GlobalTheme from "./theme/GlobalTheme";
import { BeatLoader } from "react-spinners";

function App() {
  const { light } = useSelector((state) => state.themes);

  useEffect(() => {
    if (light) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [light]);

  return (
    <Box className="dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary">
      <GlobalTheme>
        <Suspense
          fallback={
            <Box className="h-screen w-full dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary flex items-center justify-center">
              <BeatLoader color="#C9B26D" />
            </Box>
          }
        >
          {useRoutes(routes)}
        </Suspense>
      </GlobalTheme>
    </Box>
  );
}

export default App;
