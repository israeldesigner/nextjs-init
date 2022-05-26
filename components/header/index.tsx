/* eslint-disable @next/next/no-html-link-for-pages */
import * as React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Acessibility from '../acessibility';
import classes from './Header.module.scss'
import Image from 'next/image';
import LogoBranca from '../../public/img/logo-branca.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header: React.FunctionComponent = (props) => {
    return(
        <>  
            <Acessibility />
            <Navbar 
                bg="orange" 
                expand="lg"
                sticky="top" 
                collapseOnSelect
                role="header"
            >
                <Container id="contHeader">
                    <Navbar.Brand href="#home" className='navbar' style={{ width: "185px", height: "58px", position: "relative" }}>
                        <h1 className='text-white wiFor'>Wi-For</h1>
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
                            <Nav.Link href="/" className="nav-link">Início</Nav.Link>
                            <AnchorLink href='#anchorCom' className='nav-link'>Sobre</AnchorLink>
                            <AnchorLink href='#anchorRen' className='nav-link'>Como se conectar</AnchorLink>
                            <AnchorLink href='#anchorCom' className='nav-link'>Pontos de Wi-Fi</AnchorLink>
                            <AnchorLink href='#anchorFaq' className='nav-link'>Dúvidas</AnchorLink>
                            <AnchorLink href='#anchorCon' className='nav-link'>Fale conosco</AnchorLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>  
        </>
    )
}

export default Header