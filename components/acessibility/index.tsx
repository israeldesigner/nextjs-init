import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Toggle from 'react-toggle';
import "react-toggle/style.css" 


const Acessibility: React.FunctionComponent = () =>{
    const [ darkMode, setDarkMode ] = useState(false);
    
    useEffect(() => {
        const body = document.body
        const toggle:any = document.querySelector('.toggle-inner')
        
        // If dark mode is enabled - adds classes to update dark-mode styling.
        // Else, removes and styling is as normal.
        if( darkMode === true ) {
          body.classList.add('contrast')
          toggle.classList.add('toggle-active')
        } else {
          body.classList.remove('contrast')
          toggle.classList.remove('toggle-active')
        }
      }, [darkMode])
    return(
        <section className="s-acessibility d-none d-lg-block bg-light">
            <Container className='app-acessibilidade' fluid>
                <Row className="align-items-center">
                    <Col className="app-acessibilidadeMenu d-flex align-items-center">
                        <AnchorLink href='#anchorCom' className='mr-1' accessKey='1'>Conteúdo Central |</AnchorLink>
                        <AnchorLink href='#contHeader' className='mr-1' accessKey='2'>Menu |</AnchorLink>
                        <AnchorLink href='#footer' className='mr-1' accessKey='3'>Rodapé</AnchorLink>
                        <label className='mt-2 ml-3 mr-1'>
                            <Toggle
                                defaultChecked={darkMode}
                                icons={{
                                    checked: <i className="icon-heart icons text-white toggle-inner"></i>,
                                    unchecked: '🔆',
                                }}
                                aria-label="modo contrast"
                                onChange={() => darkMode === false ? setDarkMode(true) : setDarkMode(false)} 
                        />
                        </label>
                        {/* <a 
                            href="#" 
                            id="toggle"
                            onClick={() => darkMode === false ? setDarkMode(true) : setDarkMode(false)} 
                            className="ml-2 mr-1 text-gray-700"
                        >
                            <i className="icon-heart icons text-blue text-gray-700 toggle-inner"></i>
                        </a> */}
                        <a href="#" className="sizeMenos mr-1 text-gray-700">A-</a>
                        <a href="#" className="sizePadrao mr-1 text-gray-700">A</a>
                        <a href="#" className="sizeMais mr-1 text-gray-700">A+</a>
                        <div className="py-2 flex justify-items-end langButton">
                            <button className="lang-button" type="button">
                                <img src="img/br.svg" width="25" alt="br" className="" />
                            </button>
                            <button className="lang-button" type="button">
                                <img src="img/gb.svg" width="25" alt="ing" className="" />
                            </button>
                            <button className="lang-button" type="button">
                                <img src="img/es.svg" width="25" alt="es" className="" />
                            </button>
                        </div>
                    </Col>
                    <Col className="app-acessibilidadeItens d-none d-md-block">
                        <ul className="menu mb-0 text-black">
                            <li className="nav-item">
                                <a href="https://acessoainformacao.fortaleza.ce.gov.br/" className="nav-link px-1 text-gray-700" target="_blank" rel="noopener noreferrer">Acesso a informação</a>
                            </li>
                            <li className="nav-item">
                                <a href="https://transparencia.fortaleza.ce.gov.br/" className="nav-link px-1 text-gray-700" target="_blank" rel="noopener noreferrer">Transparência</a>
                            </li>
                            <li className="nav-item">
                                <a href="https://catalogodeservicos.fortaleza.ce.gov.br/" className="nav-link px-1 text-gray-700" target="_blank" rel="noopener noreferrer">Serviços</a>
                            </li>
                            <li className="nav-item">
                                <a href="http://legislacao.fortaleza.ce.gov.br/index.php/P%C3%A1gina_principal"  className="nav-link px-1 text-gray-700" target="_blank" rel="noopener noreferrer">Legislação</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Acessibility;