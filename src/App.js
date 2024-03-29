import { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";
import routes from "./routes/routes";

function App() {
  const { light } = useSelector((state) => state.themes);

  useEffect(() => {
    if (light) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [light]);

  return useRoutes(routes);
}

export default App;
