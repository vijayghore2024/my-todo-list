import Navbar from "./components/Navbar";
import TodoApp from "./components/TodoApp";
import Footer from "./components/Footer";
import { TodoContext } from "./TodoContext";
import { useState } from "react";

function App() {
  const [myTodos, setMyTodos] = useState([]);

  return (
    <div>
      <TodoContext.Provider value={{ myTodos, setMyTodos }}>
        <Navbar />
        <TodoApp />
        <Footer />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
