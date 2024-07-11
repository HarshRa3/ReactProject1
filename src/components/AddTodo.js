import { Box, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useRef } from "react";
import { allData } from "../App";
import AddTodoButton from "./AddTodoButton";

const AddTodo = ({ cancelTodo, onChange, onKeyPress }) => {
  const allStoreData = useContext(allData);
  const inputRef = useRef(null);


  useEffect(() => {
    if (!allStoreData.addTodo) {
      inputRef.current.focus();
    }
  }, [allStoreData.addTodo]);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "400px",
          position: "absolute",
          width: "100%",
          zIndex: "3",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: { xs: "80%", sm: "70%", md: "50%", lg: "30%" },
            border: "2px solid #2823232e",
            bgcolor: "white",
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
            value={allStoreData.input}
            inputRef={inputRef}
          />
          <Box
            sx={{
              display: "flex",
              width: "80%",
              margin: "15px auto",
              justifyContent: "space-between",
            }}
          >
            {/* <Button
              variant="text"
              color={"primary"}
              // sx={{ cursor: "pointer" }}
              onClick={cancelTodo}
            >
              Cancel
            </Button>
            <Button
              variant="text"
              color={"primary"}
              // sx={{ cursor: "pointer" }}
              onClick={allStoreData.addData}
            >
              Done
            </Button> */}
            <AddTodoButton TodoFunction={cancelTodo} btnTitle='cancel'  />
            <AddTodoButton TodoFunction={allStoreData.addData} btnTitle='Add'  />

          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AddTodo;
