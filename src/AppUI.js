import React from 'react';
import { TodoContext } from './TodoContext';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoCounter } from './components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';
import { Modal } from './Modal';
import { TodoForm } from './TodoForm';
import { LoadingTodos } from './components/LoadingTodo';
import { ModalDeleteQuestion } from './TodoForm/ModalDeleteQuestion';

function AppUI() {
    const { 
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        deleteTodoModal, } = React.useContext( TodoContext )


    return(
    <>
        <TodoCounter />
    
        <TodoSearch />
        
        
            <TodoList>
          { error && <p> parece que hubo un error :( </p> }
          { loading && new Array(5).fill(1).map((a, i) => <LoadingTodos key={i} />)}
          {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
          
    
          {searchedTodos.map( todo => (
            <TodoItem  
            key={todo.text} 
            text={ todo.text } 
            completed={ todo.completed }
            onComplete={ () => completeTodo(todo.text) }
            onDelete={ () => deleteTodo(todo.text) }
            />
          ))}
        </TodoList>
        
        {/* de esta forma se esta preguntando si existe y si es true(!!) */}
        {!!openModal && (  <Modal><TodoForm /></Modal>  )}
        {!!deleteTodoModal && (  <Modal><ModalDeleteQuestion /></Modal>  )}
    
        <CreateTodoButton />
        
        </>
        );
}

export { AppUI };