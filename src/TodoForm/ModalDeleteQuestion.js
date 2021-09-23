import React from 'react';
import { TodoContext } from '../TodoContext';
import "./ModalDeleteQuestion.css";


function ModalDeleteQuestion() {
    const { selectedDeleteTodo, deleteTodo, setDeleteTodoModal, setOpenModal } = React.useContext( TodoContext );

    const handleDeleteClick = () => {
        deleteTodo(selectedDeleteTodo)
        setDeleteTodoModal(false)
    }
    const handleChangeName = () => {
        deleteTodo(selectedDeleteTodo)
        setDeleteTodoModal(false)
        setOpenModal( true )
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setDeleteTodoModal(false)
    }
    return(
        <form onSubmit={onSubmit}>
            <label>¿Quieres dejar de lado este TODO?</label>
            <div className="ModalDelete-buttonContainer" >
            <button 
            type="submit"
            className="ModalDelete-button ModalDelete-button-cancel" >Atrás</button>
            <button 
            type="button"
            onClick={handleChangeName}
            className="ModalDelete-button ModalDelete-button-change" >cambiar nombre</button>
            <button 
            type="button"
            onClick={handleDeleteClick}
            className="ModalDelete-button ModalDelete-button-delete" >Borrar TODO</button>
            </div>
        </form>
    )
}

export { ModalDeleteQuestion }