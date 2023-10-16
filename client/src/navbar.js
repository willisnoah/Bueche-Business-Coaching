import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "./logo.svg"

export default function Navigate() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand className="" href="/"><img src={Logo} className="App-logo"
                        alt="logo" width="200" height="200" class="navbar sticky-top"/></Navbar.Brand>
                    <Nav className="">
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/services">Services</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/register">Register</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}