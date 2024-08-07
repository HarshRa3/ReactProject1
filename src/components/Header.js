import { Box, Fab, Typography } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
const Header = ({ addTodoBtn }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <Typography variant="h3" sx={{fontFamily:'SFProDisplay',fontWeight:'bolder'}}>Today</Typography>
        <Fab color="success" aria-label="add" onClick={addTodoBtn}>
          <AddIcon />
        </Fab>
      </Box>
    </>
  );
};

export default Header;
