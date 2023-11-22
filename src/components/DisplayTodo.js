// import { CheckBox } from '@mui/icons-material'
import {
  Box,
  Checkbox,
  Divider,
  Fab,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { allData } from "../App";
import AddIcon from "@mui/icons-material/Add";

const DisplayTodo = ({
  text,
  id,
  deleteData,
  handleCheck,
  checkData,
  complete,
}) => {
  const [edit, setEdit] = useState(false);
  const [updateInput, setUpdateInput] = useState(text);
  const inputRef = useRef(null);
  const allMyData = useContext(allData);

  useEffect(() => {
    if (edit) {
      inputRef.current.focus();
    }
  }, [edit]);

  const handleEdit = () => {
    setUpdateInput(text);
    setEdit(!edit);
  };

  const handleBlur = () => {
    allMyData.saveEdit(id, updateInput);
    setEdit(false);
  };

  return (
    <Box sx={{position:'relative'}}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px",
          minHeight: "60px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "50%",
            textAlign: "left",
          }}
        >
          <Checkbox
            onClick={handleCheck}
            checked={checkData}
            
          />
          {!edit ? (
            <Typography variant="h5" sx={{wordWrap:'anywhere'}} >{text}</Typography>
          ) : (
            <TextField
              label="Enter text"
              value={updateInput}
              onBlur={handleBlur}
              onChange={(e) => setUpdateInput(e.target.value)}
              inputRef={inputRef}
            />
          )}
        </Box>
        <Box sx={{ width: { xs: "40%", lg: "23%" } }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {!edit ? (
              <Fab
                size="small"
                color="secondary"
                aria-label="edit"
                onClick={handleEdit}
                sx={{zIndex:1}}
              >
                <EditIcon />
              </Fab>
            ) : (
              <Fab
                size="small"
                color="success"
                aria-label="add"
                onClick={handleBlur}
                sx={{zIndex:1}}
              >
                <AddIcon />
              </Fab>
            )}

            <Fab
              size="small"
              color="error"
              aria-label="delete"
              onClick={() => deleteData(id)}
              sx={{zIndex:1}}
            >
              <DeleteIcon />
            </Fab>
            {complete}
          </Box>
        </Box>
      </Box>
      <Divider />
      
    </Box>
  );
};

export default DisplayTodo;
