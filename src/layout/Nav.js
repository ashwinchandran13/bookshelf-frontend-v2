import React from 'react';
import { NavLink } from 'react-router-dom';

const navs = [
    {
        path: '/',
        name: 'Home',
    },
    {
        path: '/books',
        name: 'Books'
    },
    {
        path: '/login',
        name: 'Login'
    },
    {
        path: '/sign_up',
        name: 'Sign Up',
    },
    {
        path: '/addBook',
        name: 'Add Book'
    }
];

const Nav = () => (
    <nav>
        <ul>
            {navs.map((item, key) => (
                <li key={key}>
                    <NavLink>
                        {item.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    </nav>
);

export default Nav;