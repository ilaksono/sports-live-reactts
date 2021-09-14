import { useState } from 'react';

const useQueryData = (init: any, resetPage: () => void) => {
  const [queryData, setQueryData] = useState(init)

  const changeQueryParam = (key: string, value: string | number) => {
    resetPage();
    setQueryData((prev: any) => ({...prev, [key]: value}));
  }

  return {
    queryData,
    changeQueryParam
  }
}
export default useQueryData;