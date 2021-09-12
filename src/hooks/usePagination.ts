import {useState} from 'react';

const usePagination: any = () => {
  const [page, setPage] = useState(0);

  return {
    page,
    setPage
  }
}
export default usePagination;