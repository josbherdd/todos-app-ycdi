import React from 'react';
import '../styles/LoadingTodos.css'

function LoadingTodos() {
    return(
        <li className="TodoItem-loading">
        <div className="LoaderBalls">
            <span className="LoaderBalls__item__green"></span>
            <span className="LoaderBalls__item__blue"></span>
            <span className="LoaderBalls__item__red"></span>
        </div>
    </li>
    );
};

export { LoadingTodos }