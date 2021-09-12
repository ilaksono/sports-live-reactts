import { useState } from 'react';

const useQueryData = (init: any) => {
  const [queryData, setQueryData] = useState(init)

  const changeQueryParam = (key: string, value: string | number) => {
    setQueryData((prev: any) => ({...prev, [key]: value}));
  }

  return {
    queryData,
    changeQueryParam
  }
}
export default useQueryData;