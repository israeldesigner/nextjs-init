import { Container, Row, Col } from 'react-bootstrap';


const acessibility: React.FunctionComponent = (props) =>{
    return(
        <section className="s-acessibility d-none d-lg-block bg-light">
            <Container className='app-acessibilidade' fluid>
                <Row className="align-items-center">
                    <Col className="app-acessibilidadeMenu d-flex align-items-center">
                        <a className="scroll mr-1" href="#anchorCom" accessKey='1'> Conteúdo Central |</a>
                        <a className="scroll mr-1" href="#contHeader" accessKey='2'> Menu |</a>
                        <a className="scroll mr-1" href="#footer" accessKey='3'> Rodapé </a>
                        
                        <a href="#altocontraste" id="altocontraste" className="colorContrast ml-2 mr-1 text-gray-700">
                        <i className="icon-heart icons text-blue text-gray-700"></i></a>
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

export default acessibility;