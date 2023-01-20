import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [
  /*   {
    id: new Date().getTime(),
    description: "Recolectar la pierda del Alma",
    done: false,
    date: new Date(),
  },
  {
    id: new Date().getTime() + 1,
    description: "Recolectar la pierda del Tiempo",
    done: false,
    date: new Date(),
  }, */
];

// Funcion de inicializacion
const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = () => {
  // reducer
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);
  // Cuando "todos" cambie su estado debemos ejecutar
  // efecto secundario
  useEffect(() => {
    //
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  const handleNewTodo = (todo) => {
    console.log({ todo });
    const action = {
      type: "[TODO] Add Todo", // Type es la accion definimos en el Reducer
      payload: todo, // Payload seria el objeto que enviaremos al Reducer
    };

    dispatch(action); // Con Dispatch despachamos la accion al Reducer
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: "[TODO] Remove Todo", // Type es la accion definimos en el Reducer
      payload: id, // Payload seria el objeto que enviaremos al Reducer
    });
  };

  const handleToggleTodo = (id) => {
    console.log({ id });
    dispatch({
      type: "[TODO] Toggle Todo",
      payload: id,
    });
  };

  return {
    todos,
    todosCount: todos.length,
    todosPending: todos.filter(todo => !todo.done).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo
  };
};
