import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

export default props => {
    return (
        <Menu >

            <a className = "menu-item" href = "/main">
            <i className="fas fa-search"></i>
            </a>

            <a className = "menu-item" href = "/about">
            <i className="fas fa-question"></i>
            </a>

            <a className = "menu-item" href = "/">
            <i className="fas fa-sign-in-alt"></i>
            </a>

            <a className = "menu-item" href = "/user">
            <i class="far fa-user-circle"></i>
            </a>

        </Menu>
    )
};

//export default BurgerMenu;







