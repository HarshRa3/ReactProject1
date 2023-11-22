import React from 'react'
import { Button } from '@mui/material';

const AddTodoButton = ({TodoFunction,btnTitle}) => {
    // const allStoreData = useContext(allData);
  return (
    <Button
    variant="text"
    color={"primary"}
    sx={{ cursor: "pointer" }}
    onClick={TodoFunction}

  >
    {btnTitle}
  </Button>
  )
}

export default AddTodoButton
