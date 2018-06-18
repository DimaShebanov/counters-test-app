import React from 'react';
import Button from '../Button';

const Header = ({isSidebarOpen, toggleSidebar}) => (
    <div className="header">
        <div className="header__button-container">
            <Button isToggled={isSidebarOpen} handleClick={toggleSidebar}/>
        </div>
        <div className="header__content">
            some header content
        </div>
    </div>
);

Header.displayName = 'Header';
export default Header;
