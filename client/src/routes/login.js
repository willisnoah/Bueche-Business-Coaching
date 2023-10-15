import { useState } from 'react';

function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedin, setIsLoggedin] = useState(false);

    const login = (e) => {
        e.preventDefault();
        console.log(email, password);
        const userData = {
            email,
            password,
        };
        localStorage.setItem('token-info', JSON.stringify(userData));
        setIsLoggedin(true);
        setEmail('');
        setPassword('');
    };


    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <h1>Login </h1>
                {!isLoggedin ? (
                    <> <form>
                        <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            placeholder="Email"
                        />
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            placeholder="Password"
                        />
                        <button type="submit" onClick={login}>
                            Login
                        </button>
                    </form>
                    </>
                ) : (
                    <>
                        <h1>Success</h1>
                        <form action="/"> <button type="submit">Home</button> </form>

                    </>
                )}
            </div>
        </>
    );
}

export default App;
