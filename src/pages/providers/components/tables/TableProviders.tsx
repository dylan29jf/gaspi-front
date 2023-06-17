import { TableHeader } from "@/components";
import { useGetProviders } from "@/hooks";
import { ProviderInterface } from "@/models";
import { handleDeleteProvider } from "@/services";
import { Edit, Delete } from "@mui/icons-material";
import {
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Stack,
  IconButton,
  Pagination,
  Box,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TableProviders = () => {
  const [currentPage, setCurrentPage] = useState<number>(1); // Pagina actual 
  const { providers, allProvider } = useGetProviders(currentPage); // Cada que la pagina cambie se hacer el fetching

  const TOTAL_PAGES: number = Math.ceil(allProvider / 5) // Calculamos el total de paginas

  const handleChange = (_event: React.ChangeEvent<unknown>, page: number) => { //Funcion para hacer el cambio de pagina actual
    setCurrentPage(page)
  }

  return (
    <Paper>
      <TableContainer>
        <Table sx={{ minWidth: 750 }} aria-labelledby="table-providers">
          <TableHeader />
          <TableBody>
            {providers?.map((e) => ( // Iteramos lo elementos
              <RowProvider provider={e} key={e.id} />
            ))}
          </TableBody>
        </Table>
        <Box display={'flex'} my={3} justifyContent={'flex-end'} px={2}>
          <Pagination count={TOTAL_PAGES} page={currentPage} variant="outlined" shape="rounded" onChange={handleChange} />
        </Box>
      </TableContainer>
    </Paper>
  );
};

const RowProvider = ({ provider }: { provider: ProviderInterface }) => {
  const navigate = useNavigate();

  const { id, name, companyName, address } = provider; // Desestrucutramos el provedor

  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{companyName}</TableCell>
      <TableCell>{address}</TableCell>
      <TableCell align="right">
        <Stack direction={"row"} justifyContent={"flex-end"} spacing={2}>
          <IconButton onClick={() => navigate(`edit-provider/${id}`)}>
            <Edit />
          </IconButton>
          <IconButton
            color="error"
            onClick={async () => {
              await handleDeleteProvider(id || "");
            }}
          >
            <Delete color="error" />
          </IconButton>
        </Stack>
      </TableCell>
    </TableRow>
  );
};

export default TableProviders;
