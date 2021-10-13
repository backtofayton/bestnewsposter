import React, { useState, useEffect } from 'react';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [errors, setErrors] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            window.location.replace('/dashboard');
        } else {
            setLoading(false);
        }
    }, []);

    const onSubmit = e => {
        e.preventDefault();

        const user = {
            username: username,
            password1: password1,
            password2: password2
        };

        fetch('/api/users/auth/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.key) {
                    localStorage.clear();
                    localStorage.setItem('token', data.key);
                    localStorage.setItem('userId', data.user.id);
                    window.location.replace('/');
                } else {
                    setUsername('');
                    setPassword1('');
                    setPassword2('');
                    localStorage.clear();
                    setErrors(true);
                }
            });
    };

    return (
        <div>
            {loading === false && <h1>Signup</h1>}
            {errors === true && <h2>Cannot signup with provided credentials</h2>}
            <form onSubmit={onSubmit}>
                <label htmlFor='username'>Username:</label> <br />
                <input
                    name='username'
                    type='username'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required
                />{' '}
                <br />
                <label htmlFor='password1'>Password:</label> <br />
                <input
                    name='password1'
                    type='password'
                    value={password1}
                    onChange={e => setPassword1(e.target.value)}
                    required
                />{' '}
                <br />
                <label htmlFor='password2'>Confirm password:</label> <br />
                <input
                    name='password2'
                    type='password'
                    value={password2}
                    onChange={e => setPassword2(e.target.value)}
                    required
                />{' '}
                <br />
                <input className='my-1' type='submit' value='Signup' />
            </form>
        </div>
    );
};

export default Signup;