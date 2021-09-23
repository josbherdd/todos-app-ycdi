import React from 'react';
import '../styles/CreateTodoButton.css'
import { TodoContext } from '../TodoContext';

function CreateTodoButton() {

    const { openModal, setOpenModal } = React.useContext( TodoContext );

    const onClickButton = () => {
        if (!!openModal) {
            setOpenModal(false);
          } else {
            setOpenModal(true);
          }
    }

    return(
        <button 
        className="CreateTodoButton"
        onClick={ () => onClickButton() }
        >
             +
        </button>
    );
}

export { CreateTodoButton }
