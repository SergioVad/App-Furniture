import { Sidebar } from '../widgets/Sidebar';
import { Navbar } from '../widgets/Navbar';
import { Footer } from '../widgets/Footer';
import { SearchElemProviders } from '../shared/lib/hooks/useSearchElem';
import { AppRoutes } from './providers/RoutesProvider';

function App() {
    return (
        <SearchElemProviders>
            <Sidebar />
            <Navbar />
            <AppRoutes />
            <Footer />
        </SearchElemProviders>
    );
}

export default App;
