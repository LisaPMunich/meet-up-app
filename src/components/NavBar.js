import React from 'react';
import Icon from '../images/icons8-events-58_yellow.png';
import '../styling/nav-bar.css'

export default function NavBar() {
    return (
        <nav>
            <img  src={Icon} alt="events icon by Icon8" className="nav--icon"/>
            <h1 className="nav--title">Meet Up App</h1>
        </nav>
    )
};