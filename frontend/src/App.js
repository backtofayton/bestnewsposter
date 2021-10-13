import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Login from './views/Login';
import Signup from './views/Signup';
import Logout from './views/Logout'; // New
import Dashboard from './views/Dashboard'; // New
import PostCreate from './views/PostCreate'; // New
import PostRender from './views/PostRender'; // New
import React, { useState, useEffect } from 'react';


const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);

  const onSubmitLogin = (username, password) => {
  }

  useEffect(() => {
    console.log(username)
  })

  return (
    <div className='App'>
      <Router>
        <div className='mx-2 mt-1'>
          <Navbar />
          <Switch>
            <Route path='/login' component={() => (<Login onSubmit={onSubmitLogin} />)} exact />
            <Route path='/signup' component={Signup} exact />
            <Route path='/logout' component={Logout} exact />
            <Route path='/' component={Dashboard} exact />
            <Route path='/post-news' component={PostCreate} exact />
            <Route path='/news/:id' component={PostRender} exact />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;