// Filter.js
import { Button, Stack } from "@mui/material";
import React from "react";

const Filter = ({ todoType, setTodoType }) => {
  const filters = ["all", "completed", "incompleted"];

  const handleFilterClick = (filter) => {
    setTodoType(filter);
  };

  return (
    <Stack direction={'row'} spacing={2} sx={{justifyContent:'center',alignItems:'center',margin:'10px'}} >
      {filters.map((filter) => (
        <Button
          key={filter}
          variant="contained"
          color={todoType === filter ? "secondary" : "primary"}
          onClick={() => handleFilterClick(filter)}
          sx={{
            width: { sm: "60%", xs: "80%", md: "40%", lg: "23%" },
            height: "10%",
            fontSize: "15px",
          }}
        >
          {filter}
        </Button>
      ))}
    </Stack>
  );
};

export default Filter;
