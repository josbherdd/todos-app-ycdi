import React from 'react';
import './LoadingLogo.css'

const LoadingLogo = () => {
    return(
        <div className="ballLogo">
            <span className="ballLogoAnim__item__green"></span>
            <span className="ballLogoAnim__item__blue"></span>
            <span className="ballLogoAnim__item__red"></span>
            <p> TODO´s</p>
        </div>
    )
}

export { LoadingLogo };