import React from "react";
import { Route, Switch } from "react-router-dom";
import AppLoader from "./components/ui/hoc/appLoader";
import MainPage from "./layouts/mainPage";
import NavMenu from "../widgets/navMenu";
import ChangeProduct from "./layouts/changeProduct";
import Furniture from "./layouts/furniture";
import Profile from "../widgets/profile";
import Title from "../widgets/title";
import Footer from "../widgets/footer";
import ProtectedRoute from "./components/common/protecredRoute";
import LogOut from "./layouts/logOut";
import Login from "./layouts/login";
import Edit from "../widgets/edit";
import EditElem from "../widgets/editElem";
import { SearchElemProviders } from "./hooks/useSearchElem";
import Payment from "../pages/payment";
import DostavkaSborka from "../pages/dostavkaSborka";

function App() {
    return (
        <Switch>
            <AppLoader>
                <SearchElemProviders>
                    <NavMenu />
                    <Title />
                    <div style={{ minHeight: "1200px" }}>
                        <ProtectedRoute
                            path={"/product-change"}
                            component={ChangeProduct}
                        />{" "}
                        <ProtectedRoute
                            path={
                                "/katalog/:currentCategory/:currentElement/editElem"
                            }
                            exact
                            component={EditElem}
                        />{" "}
                        <Route
                            path={"/katalog/:currentCategory?/:currentElement?"}
                            component={Furniture}
                            exact
                        />{" "}
                        <Route path={"/login/:type?"} exact component={Login} />{" "}
                        <Route path="/logout" exact component={LogOut} />{" "}
                        <Route
                            path={"/dostavka-sborka"}
                            exact
                            component={DostavkaSborka}
                        />{" "}
                        <Route
                            path={"/kak-oplatit"}
                            exact
                            component={Payment}
                        />{" "}
                        <ProtectedRoute
                            path={"/profile"}
                            exact
                            component={Profile}
                        />{" "}
                        <ProtectedRoute path={"/edit"} exact component={Edit} />{" "}
                        <Route path={"/"} exact component={MainPage} />{" "}
                    </div>
                    <Footer />
                </SearchElemProviders>
            </AppLoader>
        </Switch>
    );
}

export default App;
