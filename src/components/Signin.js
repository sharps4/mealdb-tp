import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import users from '../assets/data/users';

function Signin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            localStorage.setItem('isLoggedIn', true);
            localStorage.setItem('user', JSON.stringify(user));
            navigate('/');
        } else {
            localStorage.setItem('isLoggedIn', false);
            setError('Invalid email or password');
        }
    };

    return (
        <div className='form-container'>
            <form className='form-login' onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
                <button type="submit">Sign in</button>
                {error && <div>{error}</div>}
            </form>
        </div>
    );
};

export default Signin;
