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
  } = useQueryData(initQueryData);


  const {
    page,
    setPage
  } = usePagination();
  useEffect(() => {
    fetchEspnData(queryData, page + 1)
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