import React, { useEffect } from 'react';
import useSportsData from 'hooks/useSportsData';
import usePagination from 'hooks/usePagination';
import useQueryData from 'hooks/useQueryData';
import useErrorModal from 'hooks/useErrorModal';
const AppContext = React.createContext();

const initQueryData = {
  resourceType: 'GamesByDate',
  sportType: 'nba',
  season: '2020-SEP-15',
}

export function AppProvider({ children }) {
  const {
    page,
    setPage,
    resetPage,
  } = usePagination();

  const {
    error,
    createError,
    handleResetError
  } = useErrorModal();
  const {
    sportsData,
    fetchEspnData
  } = useSportsData(initQueryData, createError);
  const {
    queryData,
    changeQueryParam
  } = useQueryData(initQueryData, resetPage);


  useEffect(() => {
    fetchEspnData(queryData, page)
  }, [queryData])

  return (
    <AppContext.Provider value={{
      
      //useSportsData
      
      sportsData,
      fetchEspnData,
      //usePagination
      page,
      setPage,

      //useQueryData
      queryData,
      changeQueryParam,
      // useErrorModal
      error,
      createError,
      handleResetError
    }}>
      {children}
    </AppContext.Provider>
  );
}
export default AppContext;