import { TableCell, TableHead, TableRow } from "@mui/material"

const TableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Nombre</TableCell>
        <TableCell>Razón Social</TableCell>
        <TableCell>Dirección</TableCell>
        <TableCell align="right">Acciones</TableCell>
      </TableRow>
    </TableHead>
  )
}
export default TableHeader