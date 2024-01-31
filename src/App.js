import Navbar from "./components/Navbar";
import TodoApp from "./components/TodoApp";
import Footer from "./components/Footer";
import { TodoContext } from "./TodoContext";
import { useState } from "react";

function App() {
  const [myTodos, setMyTodos] = useState([]);
  const [mode, setMode] = useState(true)

  return (
    <div className={`bg-${mode? 'light': 'dark'}`}>
      <TodoContext.Provider value={{ myTodos, setMyTodos, mode, setMode }}>
        <Navbar />
        <TodoApp />
        <Footer />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
