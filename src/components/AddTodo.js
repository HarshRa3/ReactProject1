import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import { allData } from "../App";

const AddTodo = ({ cancelTodo, onChange, onKeyPress }) => {
  const all_Data = useContext(allData);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "400px",
        }}
      >
        <Box
          sx={{
            width: { xs: "80%", sm: "70%", md: "50%", lg: "30%" },
            border: "2px solid #2823232e",
          }}
        >
          <Typography variant="h5" sx={{ margin: "15px 5%" }}>
            Add Todo
          </Typography>
          <TextField
            id="outlined-multiline-static"
            label="Enter Text Here"
            multiline
            rows={6}
            sx={{ width: "90%", marginLeft: "5%" }}
            onChange={onChange}
            onKeyPress={onKeyPress}
            value={all_Data.input}
          />
          <Box
            sx={{
              display: "flex",
              width: "80%",
              margin: "15px auto",
              justifyContent: "space-between",
            }}
          >
            <Button
              variant="text"
              color={"primary"}
              sx={{ cursor: "pointer" }}
              onClick={cancelTodo}
            >
              Cancel
            </Button>
            <Button
              variant="text"
              color={"primary"}
              sx={{ cursor: "pointer" }}
              onClick={all_Data.addData}
            >
              Done
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AddTodo;
