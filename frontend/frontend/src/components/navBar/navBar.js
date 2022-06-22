import {Navbar, Container} from "react-bootstrap"
import Logo from "../../img/logo.png"
export function NavBar() {
    return ( 
        <Navbar bg="light" variant="light">
            <Container>
            <Navbar.Brand href="#home">
                <img
                alt="logo"
                src={Logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
            The Phone Cave
            </Navbar.Brand>
            </Container>
        </Navbar>
     );
}

