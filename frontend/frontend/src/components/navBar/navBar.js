import {Navbar, Container} from "react-bootstrap"
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png"
export function NavBar() {
    return ( 
        <Navbar bg="light" variant="light">
            <Container>
            <Link to="/" style={{textDecoration: "none", color: "black", fontWeight: "700"}}>
                <img
                alt="logo"
                src={Logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
            The Phone Cave
            </Link>
            </Container>
        </Navbar>
     );
}

