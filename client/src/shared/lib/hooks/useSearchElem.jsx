import { createContext, useContext, useState } from 'react';

const SearchElemContext = createContext();

export const useSearchElem = () => {
    return useContext(SearchElemContext);
};

export const SearchElemProviders = ({ children }) => {
    const [valueSearch, setValueSearch] = useState('');
    return (
        <SearchElemContext.Provider value={{ valueSearch, setValueSearch }}>
            {children}
        </SearchElemContext.Provider>
    );
};
