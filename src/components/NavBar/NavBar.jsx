import { Container } from "react-bootstrap"
import Logo from "../Logo/Logo"
import portal from '../../../public/wallpapersden.com_rick-and-morty-portal_572x434.svg'

import './NavBar.css'

const NavBar = () => {

    return (
        <Container fluid="xl" className="navBar">
            <Logo />
            <div className="img-portal"><img src={portal} alt={import.meta.env.VITE_NAVBAR} /></div>
        </Container>
    )
}

export default NavBar