import { Card, CardContent, Divider, Typography } from "@mui/material";
import { Container } from "@/layout";
import ProviderForm from "./form/Provider.form";
import { useFormik } from "formik";
import { ProviderInterface } from "@/models";
import { handleCreateProvider } from "@/services";
import { useNavigate } from "react-router-dom";

const NewProviders = () => {
  const navigate = useNavigate();

  const formikProps = useFormik<ProviderInterface>({
    initialValues: { address: "", companyName: "", name: "" },
    onSubmit: async (values) => {
      await handleCreateProvider(values);
      navigate("/providers");
    },
  });

  return (
    <Container>
      <Card>
        <CardContent>
          <Typography variant="h6">Nuevo Proveedor</Typography>
          <Divider sx={{ mt: 1, mb: 4 }} />
          <ProviderForm textButton="Registar" formikProps={formikProps} />
        </CardContent>
      </Card>
    </Container>
  );
};
export default NewProviders;
