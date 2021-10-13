import React, { useState, useEffect, Fragment } from 'react';

const Dashboard = () => {
    const [userEmail, setUserEmail] = useState('');
    const [username, setUsername] = useState('');
    const [news, setNews] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('token') === null) {
            window.location.replace('/login');
        } else {
            fetch('/api/users/auth/user/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    // setUserEmail(data.email);
                    console.log(data)
                    setUsername(data.username)
                    localStorage.setItem('favorites', data.favorites)
                    console.log('dashboard favorites: ', localStorage.getItem('favorites'))
                });
        }
        fetch('/api/data/news/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setNews(data.reverse())
                setLoading(false);
            }
            )
    }, []);

    return (
        <div className='d-flex flex-column align-items-center'>
            {loading === false && (
                <Fragment>
                    {/* <h1>Dashboard</h1> */}
                    {/* <section className='mt-1'>Hello {username}!</section> */}
                    <div className='col-md-10'>
                        {news.map(element => {
                            return (<div key={element.id} className='bg-secondary py-1 px-2 rounded my-1'>
                                <a className='postLinks' href={`http://${element.url}`}>{element.title}</a>
                                <span>  </span>
                                <a className='commentLinks' style={{ fontSize: '0.8rem' }} href={`news/${element.id}`} >Comments</a>
                            </div>)
                        })}
                    </div>
                </Fragment>
            )}
        </div>
    );
};

export default Dashboard;