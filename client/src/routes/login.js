import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import auth from '../utils/auth';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(auth.loggedIn());

    const [loginUser, { error }] = useMutation(LOGIN_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await loginUser({
                variables: { email, password },
            });
            if (data.login.token) {
                auth.login(data.login.token);
                setIsLoggedIn(true);
            } else {
                // Handle authentication error
                console.error('Authentication failed');
            }
        } catch (e) {
            // Handle any errors that occurred during the mutation
            console.error('Error:', e);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const handleLogout = () => {
        auth.logout();
        setIsLoggedIn(false);
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>{isLoggedIn ? 'Success' : 'Login'}</h1>
            {isLoggedIn ? (
                <button onClick={handleLogout}>Logout</button>
            ) : (
                <form onSubmit={handleFormSubmit}>
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={email}
                        placeholder="Email"
                    />
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={password}
                        placeholder="Password"
                    />
                    <button type="submit">Login</button>
                </form>
            )}
        </div>
    );
}

export default Login;