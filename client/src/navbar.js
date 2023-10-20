import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './logo.svg';
import auth from './utils/auth';

export default function Navigate() {
    const [isLoggedin, setIsLoggedin] = useState(false);

    useEffect(() => {
        // Check if the user is logged in when the component mounts
        setIsLoggedin(auth.loggedIn());
    }, []);

    const handleLoginLogout = () => {
        if (!isLoggedin) {
            window.location.href = '/login';
        } else {
            // If the user is logged in, log them out
            auth.logout();
            setIsLoggedin(false);
        }
    };

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand className="" href="/">
                        <img
                            src={Logo}
                            className="App-logo"
                            alt="logo"
                            width="200"
                            height="200"
                        />
                    </Navbar.Brand>
                    <Nav className="">
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/services">Services</Nav.Link>
                        {/* <Nav.Link href='/appointments'>Appointments</Nav.Link> */}
                        <Nav.Link onClick={handleLoginLogout}>
                            {isLoggedin ? 'Logout' : 'Login'}
                        </Nav.Link>
                        {!isLoggedin && (<Nav.Link href='/register'>Register</Nav.Link>)}
                        {}
                       
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}