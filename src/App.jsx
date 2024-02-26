import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import Home from "./components/Home";
import UserForm from "./components/UserForm";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/use-state" element={<Counter />} />
          <Route path="/todos" element={<TodoList />} />
          <Route path="/user-form" element={<UserForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
