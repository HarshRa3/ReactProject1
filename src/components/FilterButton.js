// Filter.js
import { Button } from "@mui/material";
import React from "react";

const Filter = ({ setTodoType }) => {
  const filters = ["all", "completed", "incompleted"];

  const handleFilterClick = (filter) => {
    setTodoType(filter);
  };

  return (
    <>
      {filters.map((filter) => (
        <Button
          key={filter}
          variant="contained"
          color="primary"
          onClick={() => handleFilterClick(filter)}
          sx={{
            width: { sm: "60%", xs: "80%", md: "40%", lg: "23%" },
            height: "10%",
            fontSize: "15px",
            marginRight: "5px",
          }}
        >
          {filter}
        </Button>
      ))}
    </>
  );
};

export default Filter;
