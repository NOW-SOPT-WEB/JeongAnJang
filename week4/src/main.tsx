import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Styles from "./styles/index.tsx";
import { MemberContextProvider } from "./context/MemberContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Styles>
      <MemberContextProvider>
        <App />
      </MemberContextProvider>
    </Styles>
  </React.StrictMode>
);
