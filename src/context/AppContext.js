import React, { useEffect } from 'react';
import useSportsData from 'hooks/useSportsData';
import usePagination from 'hooks/usePagination';
import useQueryData from 'hooks/useQueryData';
const AppContext = React.createContext();

const initQueryData = {
  resourceType: 'GamesByDate',
  sportType: 'nba',
  season: '2020-SEP-15',
}

export function AppProvider({ children }) {

  const {
    sportsData,
    fetchEspnData
  } = useSportsData(initQueryData);
  const {
    queryData,
    changeQueryParam
  } = useQueryData(initQueryData);


  const {
    page,
    setPage
  } = usePagination();
  useEffect(() => {
    fetchEspnData(queryData, page)
  }, [queryData])

  return (
    <AppContext.Provider value={{
      sportsData,
      fetchEspnData,
      page,
      setPage,
      queryData,
      changeQueryParam
    }}>
      {children}
    </AppContext.Provider>
  );
}
export default AppContext;