import { useEffect, useRef, useState } from "react";
import TodoService from "../services/TodoServices";
import TodoItem from "./TodoItem";
import { Link } from "react-router-dom";
import UserSelect from "./UserSelect";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState();
  const [user, setUser] = useState(1);

  const selectRef = useRef();

  console.log("Some console");
  useEffect(() => {
    // Always executed whenever there is the state/renders was triggered.
    console.log("%c Effect without dependencies", "color:red");
  });

  const fetchTodos = async (userId = 1) => {
    try {
      const resp = await new TodoService().fetchTodosWithUserId(+userId);

      setTodos(resp.data);
      // localStorage.setItem("todolist", JSON.stringify(resp.data));
    } catch (error) {
      setTodos([]);
      setError("Errorś");
    }
  };

  const handleKeyPress = () => {
    console.log("key enterd");
  };

  useEffect(() => {
    console.log(
      "Effect with dependencies, which will be executed only if there is an change in dependencies"
    );
    if (todos) {
      fetchTodos(user);
    }

    document.addEventListener("keypress", handleKeyPress);

    return () => {
      // Will be executed on the time of unmounting of component
      console.log("Cleanup function");
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [user]);

  useEffect(() => {
    console.log("Effect with empty dependencies");

    fetchTodos();
  }, []);

  useEffect(() => {
    if (todos && !error) {
      selectRef.current?.focus();
    }
  }, [todos]);

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  // Guard against API errors
  if (error) {
    return <div>Error occured</div>;
  }

  if (!todos.length) {
    return <div>Please add todos</div>;
  }

  return (
    <div>
      <Link to={"/use-state"}>Go Back</Link>
      <h1>Active User: {user}</h1>
      <UserSelect onChange={handleChange} ref={selectRef} />
      <ul>
        {todos?.map(({ title, completed, id }) => (
          <TodoItem
            title={title}
            completed={completed}
            key={`${title} ${id}`}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
