import React from "react";
import { Header } from "../components";
import { Box } from "@mui/material";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        minHeight={"80vh"}
        gap={4}
      >
        {children}
      </Box>
    </>
  );
};
export default Container;
