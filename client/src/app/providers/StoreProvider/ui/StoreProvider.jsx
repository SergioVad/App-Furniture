import { Provider } from 'react-redux';
import { createStore } from '../model/createStore';
export const StoreProvider = ({ children }) => {
    const store = createStore();
    return <Provider store={store}>{children}</Provider>;
};
