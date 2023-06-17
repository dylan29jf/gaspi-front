import {
  Avatar,
  Box,
  Button,
  Card,
  CircularProgress,
  Typography,
} from "@mui/material";
import { WelcomeCardContent } from "@/styled-components";
import { Header } from "@/components";
import { useNavigate } from "react-router-dom";
import { useGetProfile } from "@/hooks";
import { ProfileInterface } from "@/models/profile.model";
import { useDispatch } from "react-redux";
import { createUser } from "@/redux/Profile/profileSlice";

const Home = () => {
  const { data, loading } = useGetProfile();

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
    >
      <Card sx={{ width: "40%" }}>
        <Header />
        <WelcomeCardContent>
          {!loading ? <Profile profile={data} /> : <CircularProgress />}
        </WelcomeCardContent>
      </Card>
    </Box>
  );
};

const Profile = ({ profile }: { profile: ProfileInterface }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const { image, name, version } = profile;

  const handleClick = () => {
    dispatch(createUser(profile))
    navigate("/providers")
  }

  return (
    <>
      <Avatar src={image} sx={{ width: 120, height: 120 }} />
      <Typography>Bienvenido {name}</Typography>
      <Button variant="contained" onClick={handleClick}>
        Continuar
      </Button>
      <Box
        boxShadow={1}
        width={"90%"}
        borderRadius={1}
        position={"absolute"}
        bottom={10}
        p={1}
      >
        <Typography textAlign={"end"} fontSize={12} color={"text.secondary"}>
          versión {version}
        </Typography>
      </Box>
    </>
  );
};

export default Home;
