import { ProtectedRoute } from '@/app/protecredRoute';
import ChangeProduct from '@/pages/changeProduct';
import DostavkaSborka from '@/pages/dostavkaSborka';
import Furniture from '@/pages/furniture';
import LogOut from '@/pages/logOut';
import Login from '@/pages/login';
import MainPage from '@/pages/mainPage';
import Payment from '@/pages/payment';
import Edit from '@/pages/Edit/ui/edit';
import EditElem from '@/pages/editElem/ui/editElem';
import { Route, Routes } from 'react-router-dom';

export const AppRoutes = () => {
    return (
        <div style={{ minHeight: '1200px' }}>
            <Routes>
                <Route path={'/'} exact element={<MainPage />} />
                <Route
                    exact
                    path="/product-change"
                    element={<ProtectedRoute />}
                >
                    <Route
                        exact
                        path="/product-change"
                        element={<ChangeProduct />}
                    />
                </Route>
                <Route
                    exact
                    path="/catalog/:currentCategory/:currentElement/editElem"
                    element={<ProtectedRoute />}
                >
                    <Route
                        exact
                        path="/catalog/:currentCategory/:currentElement/editElem"
                        element={<EditElem />}
                    />
                </Route>
                <Route exact path="/edit" element={<ProtectedRoute />}>
                    <Route exact path="/edit" element={<Edit />} />
                </Route>
                <Route
                    path={'/catalog/:currentCategory?/:currentElement?'}
                    element={<Furniture />}
                    exact
                />
                <Route path={'/login/:type?'} exact element={<Login />} />
                <Route path="/logout" exact element={<LogOut />} />
                <Route
                    path={'/dostavka-sborka'}
                    exact
                    element={<DostavkaSborka />}
                />
                <Route path={'/kak-oplatit'} exact element={<Payment />} />
            </Routes>
        </div>
    );
};
