import React, { useState, useEffect } from 'react';

const Login = (props) => {
    // console.log(props)
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            window.location.replace('/');
        } else {
            setLoading(false);
        }
    }, []);

    const onSubmit = e => {
        e.preventDefault();

        const user = {
            // email: email,
            username: username,
            password: password
        };

        fetch('/api/users/auth/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.key) {
                    // console.log(data)
                    localStorage.clear();
                    localStorage.setItem('token', data.key);
                    localStorage.setItem('userId', data.user.id);
                    window.location.replace('/');
                } else {
                    setUsername('');
                    setPassword('');
                    localStorage.clear();
                    setErrors(true);
                }
            });
    };

    const onSubmitNew = e => {
        e.preventDefault();
        props.onSubmit(username, password)
    }

    return (
        <div>
            {/* {loading === false && <h1>Login</h1>} */}
            {loading === false && (
                <form onSubmit={onSubmit}
                    className='mt-1'>
                    <label htmlFor='username'>Username:</label>
                    <input
                        className='mx-1'
                        name='username'
                        type='text'
                        value={username}
                        required
                        onChange={e => setUsername(e.target.value)}
                    />{' '}
                    {/* <br /> */}
                    <label htmlFor='password'>Password:</label>
                    <input
                        className='mx-1'
                        name='password'
                        type='password'
                        value={password}
                        required
                        onChange={e => setPassword(e.target.value)}
                    />{' '}
                    {/* <br /> */}
                    <input type='submit' value='Login' />
                </form>
            )}
            {errors === true && <section>Cannot log in with provided credentials</section>}

        </div>
    );
};

export default Login;