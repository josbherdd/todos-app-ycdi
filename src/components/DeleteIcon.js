import React from 'react';
import { TodoContext } from '../TodoContext/index.js';
import { TodoIcon } from './TodoIcon.js'

function DeleteIcon({ onDelete, item }) {
const { deleteTodoModal,setDeleteTodoModal, setSelectDeleteTodo } = React.useContext( TodoContext );

const onClickButton = () => {
  if (!!deleteTodoModal){
    setDeleteTodoModal(false)
  } else {
    setSelectDeleteTodo(item)
    setDeleteTodoModal(true)
  }
}

return (
  <TodoIcon
    type="delete"
    onClick={() => onClickButton()}
  />
);
}

export { DeleteIcon };

// const { deleteTodoModal,setDeleteTodoModal, } = React.useContext( TodoContext );

// const onClickButton = () => {
//   if (!!deleteTodoModal){
//     setDeleteTodoModal(false)
//   } else {
//     setDeleteTodoModal(true)
//   }
// }

// return (
//   <TodoIcon
//     type="delete"
//     onClick={() => onClickButton()}
//   />
// );
// }

// solucion posible: guardar en un estado el todo para eliminar


// return (
//   <TodoIcon
//     type="delete"
//     onClick={onDelete}
//   />
// );