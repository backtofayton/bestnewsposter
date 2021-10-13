import React, { useState, useEffect, Fragment } from 'react';

const Post = () => {
    const [username, setUsername] = useState('');
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [text, setText] = useState('');


    const onPost = e => {
        e.preventDefault();
        console.log('post going')
        if (localStorage.getItem('token') === null) {
            window.location.replace('/login');
        } else {
            fetch('/api/data/news/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({ title, url, text })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.id) {
                        window.location.replace('/')
                    }
                })

        }
    }

    return (
        <Fragment>
            <div className='mt-2'>
                <form onSubmit={onPost}
                    className='m-1'>
                    <label htmlFor='title'>Title</label>
                    <input
                        className='form-control'
                        name='title'
                        type='text'
                        value={title}
                        required
                        onChange={e => setTitle(e.target.value)}
                    />{' '}
                    {/* <br /> */}
                    <label htmlFor='url'>Url</label>
                    <input
                        className='form-control'
                        name='url'
                        type='text'
                        value={url}
                        onChange={e => setUrl(e.target.value)}
                    />{' '}
                    <label htmlFor=''>Text</label>
                    <textarea
                        className='form-control'
                        name='comment'
                        id='comment'
                        value={text}
                        onChange={e => setText(e.target.value)}
                        rows="3" cols="40"></textarea>
                    <input className='btn btn-primary' type='submit' value='Post' />
                </form>
            </div>
        </Fragment>
    );
};

export default Post;