/* eslint-disable @next/next/no-html-link-for-pages */
import { Container, Nav, Navbar } from 'react-bootstrap';
import Acessibility from '../acessibility';
import Image from 'next/image';
import LogoBranca from '../../public/logo-branca.png'

const Header: React.FunctionComponent = (props) => {
    return(
      <header id="header" className="">
        <Acessibility />
        <div id="contHeader" className="container-fluid">
            <nav className="h-nav navbar navbar-expand-lg">
                <div className="h-nav__links--order">
                    <a href="https://www.fortaleza.ce.gov.br/" target="_blank" className="h-nav__mainBrand" rel="noreferrer">
                        <Image src={LogoBranca}  width={185} height={185}  alt="Logo da Prefeitura Branca"  id="logoPrefBranca" className="h-nav__brand--hidden"/>
                    </a>
                    <ul className="h-nav__menu--list navbar-nav ml-auto">
                        <li className="nav-item">
                        <a className="nav-link" href="/">Início</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link linkAnchorCom" href="#">Sobre</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link linkAnchorRen" href="#">Como se conectar</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link linkAnchorFor" href="#">Pontos de Wi-Fi</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link linkAnchorPar" href="#">Parceiros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link linkAnchorFaq" href="#">Dúvidas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link linkAnchorCon" href="#">Fale conosco</a>
                        </li>
                    </ul>
                    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#mobileMenu" aria-controls="mobileMenu"
                    aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i className="icon-menu icons text-white"></i></span>
                    </button>
                </div>

                <div className="h-nav_menu--hidden collapse navbar-collapse bg-white" id="mobileMenu">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link linkAnchorAl" href="/">Início</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link linkAnchorCom" href="#">Sobre</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link linkCursos" href="#">Como se conectar</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link linkAnchorFor" href="#">Pontos de Wi-fi</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link linkAnchorPar" href="#">Parceiros</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link linkAnchorFaq" href="#">Dúvidas</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link linkAnchorCon" href="#">Fale conosco</a>
                        </li>

                        <li className="nav-item mt-2">
                            <button type="button"  className="btn btn-warning btn-block nav-link ">
                                <i className="icon-login icons mr-1"></i>Cadastrar
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
      </header>
    )
}

export default Header