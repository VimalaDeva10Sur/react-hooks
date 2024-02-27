import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import Home from "./components/Home";
import UserForm from "./components/UserForm";
import Button from "./components/Button";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/use-state" element={<Counter />} />
          <Route path="/todos" element={<TodoList />} />
          <Route path="/user-form" element={<UserForm />} />
          <Route path="/use-ref" element={<Button />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
