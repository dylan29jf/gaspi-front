import { TablePagination as PaginationMUI } from "@mui/material";

const TablePagination = () => {
  return (
    <PaginationMUI
      rowsPerPageOptions={[5, 10, 25]}
      component="div"
      count={rows.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
};
export default TablePagination;
