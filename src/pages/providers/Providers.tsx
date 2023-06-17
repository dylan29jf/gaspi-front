import { Box, Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import { Container } from "@/layout";
import { useNavigate } from "react-router-dom";
import TableProviders from "./components/tables/TableProviders";

export interface ActionsInterface {
  id: string;
  newProvider: boolean;
  editProvider: boolean;
}

const Providers = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Box display={"block"} minWidth={750} textAlign={"end"}>
        <Button
          variant="contained"
          endIcon={<Add />}
          size="small"
          onClick={() => navigate("new-provider")}
        >
          Nuevo
        </Button>
      </Box>
      <TableProviders />
    </Container>
  );
};
export default Providers;
