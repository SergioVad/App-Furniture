import { Route, Routes } from "react-router-dom";
import AppLoader from "../widgets/appLoader";
import NavMenu from "../widgets/navMenu";
import Profile from "../widgets/profile";
import Title from "../widgets/title";
import Footer from "../widgets/footer";
import ProtectedRoute from "./protecredRoute";
import Edit from "../widgets/edit";
import EditElem from "../widgets/editElem";
import Payment from "../pages/payment";
import DostavkaSborka from "../pages/dostavkaSborka";
import { SearchElemProviders } from "../shared/lib/hooks/useSearchElem";
import ChangeProduct from "@/pages/changeProduct";
import Furniture from "../pages/furniture";
import Login from "../pages/login";
import LogOut from "../pages/logOut";
import MainPage from "../pages/mainPage";

function App() {
    return (
        <AppLoader>
            <SearchElemProviders>
                <NavMenu />
                <Title />
                <div style={{ minHeight: "1200px" }}>
                    <Routes>
                        {/* <ProtectedRoute
                            path={"/product-change"}
                            component={ChangeProduct}
                        />{" "}
                        <ProtectedRoute
                            path={
                                "/catalog/:currentCategory/:currentElement/editElem"
                            }
                            exact
                            component={EditElem}
                        />{" "} */}
                        <Route
                            path={"/catalog/:currentCategory?/:currentElement?"}
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
                        {/* <ProtectedRoute
                            path={"/profile"}
                            exact
                            component={Profile}
                        />{" "}
                        <ProtectedRoute path={"/edit"} exact component={Edit} />{" "} */}
                        <Route path={"/"} exact component={MainPage} />{" "}
                    </Routes>
                </div>
                <Footer />
            </SearchElemProviders>
        </AppLoader>
    );
}

export default App;
