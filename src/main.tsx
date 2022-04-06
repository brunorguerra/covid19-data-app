import React from "react";
import ReactDOM from "react-dom";
import { DataContextProvider } from "./contexts/DataContext";
import { GlobalStyle } from "./Global";
import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <DataContextProvider>
            <GlobalStyle />
            <App />
        </DataContextProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
