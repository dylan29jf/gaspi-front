import { useAppSelector } from "@/hooks/redux";
import { resetUser } from "@/redux/Profile/profileSlice";
import { ExitToApp, MoreVert } from "@mui/icons-material";
import { Box, Typography, IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const state = useAppSelector((store) => store.user.name);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(resetUser());
    navigate("/");
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      height={50}
      bgcolor={"#f8f8f8"}
      px={2}
      py={1}
    >
      <Box display={"flex"} alignItems={"center"}>
        <img
          src="http://www.gapsi.com.mx/img/logo.png"
          alt="Logo Gaspi"
          loading="lazy"
          height={30}
        />
        <Typography ml={2}>e-Commerce Gaspi</Typography>
      </Box>
      {state !== "" ? (
        <IconButton title="Eliminar store" onClick={handleClick}>
          <ExitToApp />
        </IconButton>
      ) : (
        <IconButton>
          <MoreVert />
        </IconButton>
      )}
    </Box>
  );
};
export default Header;
