import {
  Card,
  CardContent,
  CircularProgress,
  Divider,
  Typography,
} from "@mui/material";
import { Container } from "@/layout";
import { useFormik } from "formik";
import { ProviderInterface } from "@/models";
import ProviderForm from "./form/Provider.form";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProvider } from "@/hooks";
import { handleUpdateProvider } from "@/services";

const EditProvider = () => {
  const { id } = useParams();
  const navigate = useNavigate()

  const { provider, loading } = useGetProvider(id || "");

  const formikProps = useFormik<ProviderInterface>({
    enableReinitialize: true,
    initialValues: provider,
    onSubmit: async (values) => {
      await handleUpdateProvider(values, id || "");
      navigate("/providers")
    },
  });

  return (
    <Container>
      <Card>
        <CardContent>
          <Typography variant="h6">Editar Proveedor</Typography>
          <Divider sx={{ mt: 1, mb: 4 }} />
          {loading ? (
            <CircularProgress />
          ) : (
            <ProviderForm textButton="Actualizar" formikProps={formikProps} />
          )}
        </CardContent>
      </Card>
    </Container>
  );
};
export default EditProvider;
