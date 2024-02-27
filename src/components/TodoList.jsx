import { useEffect, useRef, useState } from "react";
import TodoService from "../services/TodoServices";
import TodoItem from "./TodoItem";
import { Link } from "react-router-dom";
import UserSelect from "./UserSelect";
import { useTodos } from "../hooks/useTodos";

const TodoList = () => {
  // const [todos, setTodos] = useState([]);
  // const [error, setError] = useState();
  // const [loading, setLoading] = useState(null);
  const [user, setUser] = useState(1);
  const { error, fetchTodos, todos, loading } = useTodos();

  // Used to reference the value thats not needed for rendering or the Real DOM elements.
  const selectRef = useRef();

  console.log("Some console");
  useEffect(() => {
    // Always executed whenever there is the state/renders was triggered.
    console.log("%c Effect without dependencies", "color:red");
  });

  // const fetchTodos = async (userId = 1) => {
  // try {
  //   setLoading(true);
  //   const resp = await new TodoService().fetchTodosWithUserId(+userId);

  //   setLoading(false);
  //   setTodos(resp.data);
  // } catch (error) {
  //   setLoading(false);
  //   setError("Errorś");
  // }
  // };

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
      // Will be executed at the time of unmounting of component
      console.log("Cleanup function");
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [user]);

  useEffect(() => {
    // Executed on the time of mounting the component
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

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <>
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
    </>
  );
};

export default TodoList;
