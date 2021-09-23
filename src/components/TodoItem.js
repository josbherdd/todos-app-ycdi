import React from 'react';
import '../styles/TodoItem.css'
import { CompleteIcon } from './CompleteIcon.js';
import { DeleteIcon } from './DeleteIcon';

function TodoItem(props) {

    return(
        <li className="TodoItem" >
            <CompleteIcon
            completed={ props.completed }
            onComplete={ props.onComplete }
            />
    
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>
                {props.text}
            </p>

            <DeleteIcon 
            onDelete={ props.onDelete }
            item={props.text}
            />
        </li>
    );
};

export { TodoItem }