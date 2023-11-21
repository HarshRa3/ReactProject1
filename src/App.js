import { Box, Fab } from "@mui/material";
import React, { createContext, useState } from "react";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import DisplayTodo from "./components/DisplayTodo";
import uuid from "react-uuid";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
export const allData = createContext();
const App = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  // const [todoType, setTodotype] = useState("all");
  const [addTodo, setAddTodo] = useState(true);

  const addTodoBtn = () => {
    setAddTodo(false);
  };

  const cancelTodo = () => {
    setAddTodo(true);
  };

  const addData = () => {
    if (input.trim() !== "") {
      setData([...data, { id: uuid(), text: input, check: false }]);
      toast.success("Your Todo Has been Added", {
        position: "top-center",
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });    
      setInput("");
    } else {
      setInput("");
    }
    setAddTodo(true);
  
  };

  const saveEdit = (id, updatedvalue) => {
    if (updatedvalue.trim() !== "") {
      setData((prevData) =>
        prevData.map((e) =>
          e.id === id ? { ...e, text: updatedvalue.trim() } : e
        )
      );
    }
    toast.success("Your Todo Has been Edited", {
      position: "top-center",
      autoClose: 2000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });

  };

   const deleteData = (index) => {
    if (data.length > 0) {
      localStorage.clear();
      setData(data.filter((e) => e.id !== index));
    } else {
      setData(data.filter((e) => e.id !== index));
    }

    toast.success("Your Todo Has been Deleted", {
      position: "top-center",
      autoClose: 2000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addData();
    }
  };

  const handleCheck = (id) => {
    const checkBoxData = data.map((e) =>
      e.id === id ? { ...e, check: !e.check } : e
    );
    setData(checkBoxData);
  };

  return (
    <allData.Provider value={{ addData, saveEdit, data }}>
      <Box>
        <Header addTodoBtn={addTodoBtn} />
        {!addTodo ? (
          <AddTodo
            cancelTodo={cancelTodo}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => handleKeyPress(e)}
          />
        ) : (
          data.map((e) => (
            <DisplayTodo
              key={e.id}
              text={e.text}
              id={e.id}
              deleteData={() => deleteData(e.id)}
              handleCheck={() => handleCheck(e.id)}
              complete={
                e.check ? (
                  <Fab size="small" color="success" />
                ) : (
                  <Fab size="small" color="error" />
                )
              }
            />
          ))
        )}
      </Box>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </allData.Provider>
  );
};

export default App;
