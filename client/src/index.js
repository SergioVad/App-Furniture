import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import './index.css';
import { Loader } from './shared/lib/hooks/loader';
import { ErrorBoundary } from './shared/lib/hooks/ErrorBoundary';
import { StoreProvider } from './app/providers/StoreProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ErrorBoundary fallback={<Loader />}>
            <StoreProvider>
                <App />
            </StoreProvider>
        </ErrorBoundary>
    </BrowserRouter>,
);
