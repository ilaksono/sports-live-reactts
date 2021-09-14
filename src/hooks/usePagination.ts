import {useState} from 'react';

const usePagination: any = () => {
  const [page, setPage] = useState(1);

  const resetPage = () => setPage(1);
  return {
    page,
    setPage,
    resetPage
  }
}
export default usePagination;