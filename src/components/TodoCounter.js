import React from 'react';
import { LoadingLogo } from '../LoadingLogo';
import '../styles/TodoCounter.css'
import { TodoContext } from '../TodoContext';

function TodoCounter() {

    const { totalTodos, completedTodos, loading, loaded } = React.useContext( TodoContext );

    return (
        <>
        { loading && <LoadingLogo />}
        { loaded && <div className="ballLogo">
            <span className="ballLogo__item__green"></span>
            <span className="ballLogo__item__blue"></span>
            <span className="ballLogo__item__red"></span>
            <p> TODO´s</p>
        </div>}
        <div className="TituloTodo" >
        <h2 className="MainTitle" >Has completado {completedTodos} de {totalTodos} TODOs</h2>
        <small className="TodoCounter">You can do it!!</small>
        </div>
        </>
    )
}

export { TodoCounter };