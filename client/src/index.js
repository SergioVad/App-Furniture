import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Router } from "react-router-dom";
import history from "./shared/utils/history";
import App from "./app/App";
import "./index.css";
import { ErrorBoundary } from "./app/hooks/ErrorBoundary";
import { Loader } from "./app/hooks/loader";
import { StoreProvider } from "./app/providers/StoreProvider/ui/StoreProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <ErrorBoundary fallback={<Loader />}>
            <StoreProvider>
                <Router history={history}>
                    <App />
                </Router>
            </StoreProvider>
        </ErrorBoundary>
    </BrowserRouter>,
);
