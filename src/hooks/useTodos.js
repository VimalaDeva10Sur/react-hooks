import { useState } from "react";
import TodoService from "../services/TodoServices";

export const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const fetchTodos = async (userId = 1) => {
    try {
      setLoading(true);
      const resp = await new TodoService().fetchTodosWithUserId(+userId);

      setLoading(false);
      setTodos(resp.data);
    } catch (error) {
      setLoading(false);
      setError("Errorś");
    }
  };

  return {
    todos,
    fetchTodos,
    error,
    loading,
  };
};
