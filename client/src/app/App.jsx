import { Sidebar } from '../widgets/Sidebar';
import { Navbar } from '../widgets/Navbar';
import { Footer } from '../widgets/Footer';
import { AppRoutes } from './providers/RoutesProvider';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoggedIn, loadUsersList } from './store/users';
import { useEffect } from 'react';

function App() {
    const isLoggedIn = useSelector(getIsLoggedIn());
    const dispatch = useDispatch();

    useEffect(() => {
        if (isLoggedIn) {
            dispatch(loadUsersList());
        }
    }, [isLoggedIn]);
    return (
        <>
            <Sidebar />
            <Navbar />
            <AppRoutes />
            <Footer />
        </>
    );
}

export default App;
