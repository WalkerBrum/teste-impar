import { createContext, useContext,  useState } from 'react';

interface ISearchContextData {
    searchValue: string;
    setSearchValue: (value: string) => void;
}

const SearchContext = createContext({} as ISearchContextData);

export const useSearchContext = () => {
  return useContext(SearchContext);
};

interface IAppSearchProvider {
    children: React.ReactNode;
}

export const SearchProvider: React.FC<IAppSearchProvider> = ({ children }) => {
  const [searchValue, setSearchValue] = useState<string>('');


  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
};


