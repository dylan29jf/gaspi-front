import { Button, Grid, Stack } from "@mui/material";
import { Input } from "../../../components";
import { ProviderInterface } from "../../../models";
import { FormikProps } from "formik";
import { useNavigate } from "react-router-dom";

const ProviderForm = ({
  formikProps,
  textButton
}: {
  formikProps: FormikProps<ProviderInterface>;
  textButton: string
}) => {

  const navigate = useNavigate()

  const {handleSubmit, handleChange, handleBlur, values, errors} = formikProps
 
  return (
    <form onSubmit={handleSubmit}>
      <Grid container justifyContent={"center"} spacing={4}>
        <Grid item xs={12}>
          <Input
            label={"Nombre"}
            name="name"
            onChange={handleChange}
            value={values.name}
            errors=""
            onTouched={false}
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            label={"Razón Social"}
            name="companyName"
            onChange={handleChange}
            value={values.companyName}
            errors=""
            onTouched={false}
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            label={"Dirección"}
            name="address"
            onChange={handleChange}
            value={values.address}
            errors=""
            onTouched={false}
            multiline
            minRows={5}
          />
        </Grid>
      </Grid>
      <Stack mt={4} direction={'row'} justifyContent={'space-between'}>
        <Button color="error" onClick={() => navigate('/providers')}> 
          Cancelar
        </Button>
        <Button variant="contained" type="submit">
          {textButton}
        </Button>
      </Stack>
    </form>
  );
};
export default ProviderForm;
