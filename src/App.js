// App.js
import { Box, Button, Fab, Stack } from "@mui/material";
import React, { createContext, useEffect, useState } from "react";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import DisplayTodo from "./components/DisplayTodo";
import uuid from "react-uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Filter from "./components/FilterButton";

export const allData = createContext();

const App = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [addTodo, setAddTodo] = useState(true);
  const [todoType, setTodoType] = useState("all");
  const [filteredData, setFilteredData] = useState([]);

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
      toast.success("Your Todo Has been Edited", {
        position: "top-center",
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    }
  };

  const deleteData = (index) => {
    if (data.length > 0) {
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

  useEffect(() => {
    const storedData = localStorage.getItem("Data");

    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        if (Array.isArray(parsedData)) {
          setData(parsedData);
        } else {
          console.error("Invalid data format:", parsedData);
        }
      } catch (error) {
        console.error("Error parsing JSON data:", error);
      }
    }
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      localStorage.setItem("Data", JSON.stringify(data));
    }
  }, [data]);

  useEffect(() => {
    const updatedFilteredData = data.filter((todo) => {
      if (todoType === "completed") {
        return todo.check;
      } else if (todoType === "incompleted") {
        return !todo.check;
      }
      return true;
    });
    setFilteredData(updatedFilteredData);
  }, [data, todoType]);

  const clearAllData = () => {
    setData([]);
    localStorage.clear();
  };

  return (
    <allData.Provider
      value={{ addData, saveEdit, data, setTodoType, filteredData }}
    >
      <Box>
        <Header addTodoBtn={addTodoBtn} />
        {!addTodo && (
          <AddTodo
            cancelTodo={cancelTodo}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => handleKeyPress(e)}
          />
        )}
        {data.length > 0 && <Filter todoType={todoType} setTodoType={setTodoType} />}

        <Box sx={{ height: "500px", overflow: "auto" }}>
          {filteredData.map((e) => (
            <DisplayTodo
              key={e.id}
              text={e.text}
              id={e.id}
              deleteData={() => deleteData(e.id)}
              handleCheck={() => handleCheck(e.id)}
              checkData={e.check}
              complete={
                e.check ? (
                  <Fab size="small" color="success" sx={{ zIndex: 1 }} />
                ) : (
                  <Fab size="small" color="error" sx={{ zIndex: 1 }} />
                )
              }
            />
          ))}
        </Box>
        <Stack direction={"row"} sx={{ justifyContent: "center" }}>
          {data.length > 0 && (
            <Button variant="contained" onClick={clearAllData}>
              Clear all
            </Button>
          )}
        </Stack>
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
