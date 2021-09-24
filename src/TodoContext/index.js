import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useLoadedItem } from "./useLoadedItem";

// esta posee dentro dos parametros llamados consumer y provider
const TodoContext = React.createContext();

// este componente sera un atajo para llegar a <TodoContext.provider>
function TodoProvider(props) {
  const {
    item: todos,
    itemSalvado: todosSalvado,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const { loaded } = useLoadedItem();

  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState( false )
  const [deleteTodoModal, setDeleteTodoModal] = React.useState( false )
  const [selectedDeleteTodo, setSelectDeleteTodo] = React.useState(null);

  //este codigo se usa para saber/filtrar los TODOs que tengan la propiedad completed como true
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  //esta es la cantidad total de TODOs en la lista
  const totalTodos = todos.length;

  let searchedTodos = [];

  //si el largo del valor ingresado en el buscador no es mayor a 1 entonces mostrar todos los todos( por ahora solo muestra los los default porque es el valor asignado al por defecto al estado )
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    //si es mayor a 1 convertir el texto del todo y del valor de busqueda a minusculas y retornar/mostrar los todo que incluyan/tengan es si elementos iguales al valor de busqueda
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    });
  }

  //marca como completado un TODOs
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    todosSalvado(newTodos);
  };

  //elimina un TODO
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    todosSalvado(newTodos);
  };

  //Añade un TODO
  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    todosSalvado(newTodos);
  };
  //todas las propiedades que se quieran com partir en el contexto deben estar dentro de la propiedad value
  return (
    <TodoContext.Provider
      value={{
        error,
        loading,
        loaded,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        deleteTodoModal,
        setDeleteTodoModal,
        addTodo,
        selectedDeleteTodo,
        setSelectDeleteTodo
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}


export { TodoContext, TodoProvider };