import React, { useState, useEffect, Fragment } from 'react';

const Logout = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('token') == null) {
            window.location.replace('/login');
        } else {
            setLoading(false);
        }
    }, []);

    const handleLogout = e => {
        e.preventDefault();

        fetch('/api/users/auth/logout/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                localStorage.clear();
                window.location.replace('/login');
            });
    };

    return (
        <div>
            {loading === false && (
                <Fragment>
                    <h4>Are you sure you want to logout?</h4>
                    <input type='button' value='Logout' onClick={handleLogout} />
                </Fragment>
            )}
        </div>
    );
};

export default Logout;