import React from 'react';
import ReactDOM from 'react-dom';

import './Modal.css'

function Modal({ children }) {
    return ReactDOM.createPortal(
        <div className="Modalbackground" >
            {children}
        </div>,
        document.getElementById( 'modal' )
    );
}

export { Modal };

// este componente modal deberia permitirnos ser reutilizado para que enviemos lo que querramos a nuestro modal