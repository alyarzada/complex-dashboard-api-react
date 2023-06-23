import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Provider } from "react-redux";
import { store } from "./app/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GlobalTheme from "./theme/GlobalTheme";

import "./i18n";
import "./index.css";
import "./tailwind.css";

// Create a client
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <GlobalTheme>
          <App />
        </GlobalTheme>
      </Provider>
    </QueryClientProvider>
  </BrowserRouter>
);
