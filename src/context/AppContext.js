import React from 'react';
import useSportsData from 'hooks/useSportsData';
import usePagination from 'hooks/usePagination';
const AppContext = React.createContext();
export function AppProvider({ children }) {

  const {
    sportsData,
    fetchEspnData
  } = useSportsData();

  const {
    page,
    setPage
  } = usePagination();

  return (
    <AppContext.Provider value={{
      sportsData,
      fetchEspnData,
      page,
      setPage
    }}>
      {children}
    </AppContext.Provider>
  );
}
export default AppContext;