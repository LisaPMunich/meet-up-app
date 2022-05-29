import React from 'react';
import Icon from '../images/icons8-events-58.png';
import '../styling/nav-bar.css'

export default function NavBar() {
    return (
        <nav>
            <img  src={Icon} alt="event icon" className="nav--icon"/>
            <h2 className="nav--title">Meet Up App</h2>
        </nav>
    )
};