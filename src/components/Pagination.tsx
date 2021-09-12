import React from 'react';
import TablePagination from '@material-ui/core/TablePagination';
import {Container} from '@material-ui/core';
const TablePaginationDemo = (props: any) => {


  const {
    page = 0,
    setPage,
    count,
    pageCallback
  } = props;

  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
    pageCallback(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Container>

      <TablePagination
        component="div"
        count={count || 100}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        // showFirstButton={true}
        // showLastButton={true}
      />
    </Container>
  );
}
export default TablePaginationDemo;