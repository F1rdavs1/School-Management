import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { TokenContext } from "./context/Context.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <TokenContext>
      <App />
      <Toaster />
    </TokenContext>
  </BrowserRouter>
);
