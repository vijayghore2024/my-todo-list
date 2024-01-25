import Navbar from "./components/Navbar";
import TodoApp from "./components/TodoApp";
import Footer from "./components/Footer";
import { TodoContext } from "./TodoContext";
import { useState } from "react";

function App() {
  const [myTodos, setMyTodos] = useState([
    {
      id: 1,
      title: "Goto Market",
    },
    {
      id: 2,
      title: "Buy Some Books",
    },
    {
      id: 3,
      title: "Use Mobile Phone"
    }
  ]);

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
