/* eslint-disable @next/next/no-html-link-for-pages */
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Acessibility from '../acessibility';
import classes from './Header.module.scss'
import Image from 'next/image';
import LogoBranca from '../../public/logo-branca.png'

console.log(classes);

const Header: React.FunctionComponent = (props) => {
    return(
      <header id="header" className="">
        <Acessibility />
        <Navbar 
            bg="success" 
            expand="lg"
            sticky="top" 
            collapseOnSelect
        >
            <Container id="contHeader">
                <Navbar.Brand href="#home" className='navbar' style={{ width: "185px", height: "58px", position: "relative" }}>
                    <Image 
                        src={LogoBranca}  
                        alt="Logo da Prefeitura Branca"  
                        id="logoPrefBranca" 
                        className=""
                        layout="fill"
                        priority={true}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="h-nav justify-content-end">
                    <Nav className="h-nav__menu--list navbar-nav">
                        <Nav.Link href="#home" className="nav-link">Início</Nav.Link>
                        <Nav.Link href="#link" className="nav-link">Sobre</Nav.Link>
                        <Nav.Link href="#home" className="nav-link">Como se conectar</Nav.Link>
                        <Nav.Link href="#link" className="nav-link">Pontos de Wi-Fi</Nav.Link>
                        <Nav.Link href="#home" className="nav-link">Parceiros</Nav.Link>
                        <Nav.Link href="#link" className="nav-link">Dúvidas</Nav.Link>
                        <Nav.Link href="#link" className="nav-link">Fale conosco</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      </header>
    )
}

export default Header