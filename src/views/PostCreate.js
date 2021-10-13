import React, { useState, useEffect, Fragment } from 'react';

const Post = () => {
    const [username, setUsername] = useState('');
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');

    const onPost = e => {
        e.preventDefault();
        console.log('post going')
        if (localStorage.getItem('token') === null) {
            window.location.replace('/login');
        } else {
            fetch('/api/news/news/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({ title, url })
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
                    <label htmlFor='title'>Title:</label>
                    <input
                        className='mx-1'
                        name='title'
                        type='text'
                        value={title}
                        required
                        onChange={e => setTitle(e.target.value)}
                    />{' '}
                    {/* <br /> */}
                    <label htmlFor='url'>Url:</label>
                    <input
                        className='mx-1'
                        name='url'
                        type='text'
                        value={url}
                        required
                        onChange={e => setUrl(e.target.value)}
                    />{' '}
                    {/* <br /> */}
                    <input className='' type='submit' value='Post' />
                </form>
            </div>
        </Fragment>
    );
};

export default Post;