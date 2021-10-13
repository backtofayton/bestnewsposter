import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            setIsAuth(true);
        }
    }, []);

    return (
        <nav className='mb-1 bg-dark p-1 w-100'>
            {isAuth === true ? (
                <Fragment>
                    {' '}
                    <Link to='/'>Home</Link>
                    <span> | </span>
                    <Link to='/logout'>Logout</Link>
                    <span> | </span>
                    <Link to='/post-news'>Post</Link>
                </Fragment>
            ) : (
                <Fragment>
                    {' '}
                    <Link to='/login'>Login</Link>
                    <span> | </span>
                    <Link to='/signup'>Signup</Link>
                    <span> | </span>
                    <Link to='/'>Home</Link>

                </Fragment>
            )}
        </nav >
    );
};

export default Navbar;