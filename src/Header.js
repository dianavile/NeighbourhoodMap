import React from 'react';
import './App.css';

//Stateless Functional Component
const Header = (props) => {
    return (
        <header className='header' title='Buenas Migas Barcelona' tabIndex='0'>
            <div className='header-titles'>
                <h1 className="header-title">Buenas Migas Barcelona</h1>
                <h4 className="header-subtitle">FOCACCERIA</h4>
            </div>
        </header>
    );
}

export default Header;
