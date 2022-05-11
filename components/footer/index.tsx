import { Col, Container, Row } from 'react-bootstrap'
import classes from './Footer.module.scss'


const Footer:React.FunctionComponent = (props) =>{
    return(
        <footer id="footer" className="s-footer">
            <Container>
                <Row>
                    <Col>
                        <div className="col-lg-3 col-md-12 s-footer__blockLogo">
                            <a href="#">
                                <img src="img/logo-wifor.png" alt="logo juventude digital" className="text-center mb-2 logoWiFor" width="165" />
                            </a>

                            <div className="footer-social d-flex  mb-3 mt-3">
                                <a target="_blank" href="https://pt-br.facebook.com/FortalezaCitinova/" data-toggle="tooltip" rel="noreferrer">
                                    <i className="fa fa-facebook icon-circle bg-facebook text-center text-white aria-hidden="></i>
                                </a>
                                <a target="_blank" href="https://www.instagram.com/prefeituradefortaleza/" data-toggle="tooltip" rel="noreferrer">
                                    <i className="fa fa-instagram icon-circle bg-black text-white" aria-hidden="true"></i>
                                </a>
                                <a target="_blank" href="https://www.youtube.com/user/prefeiturafortaleza" data-toggle="tooltip" rel="noreferrer">
                                    <i className="fa fa-youtube   icon-circle bg-youtube text-white" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-12">
                        <div>
                            <a href="#">
                                <img src="img/logo-citinovaBlack.png" alt="logo citinova" className="text-center mb-1 mt-1" width="200" />
                            </a>
                        </div>
                        <address className="text-black">

                            <b className="font-weight-bold">Fundação de Ciência,
                                Tecnologia e Inovação de Fortaleza – Citinova</b>
                            <br />
                            Rua dos Tremembés, 02 - Praia de Iracema, Fortaleza - CE
                            <br />
                            CEP: 60060-520<br />
                        </address>
                    </div>
                    <div className="col-lg-4 col-md-12 d-block">
                        <a href="https://www.fortaleza.ce.gov.br/" target="_blank" rel="noreferrer">
                            <img src="img/logoPref.png" className="mt-3 logoBranca" alt="Logo Prefeitura de Fortaleza" />
                        </a>
                        <br />
                        <br />
                        <a target="_blank" data-toggle="tooltip" className="mt-3"
                         href="https://acessoainformacao.fortaleza.ce.gov.br/sistema/site/index.html?ReturnUrl=%2fsistema%2f" rel="noreferrer">
                            <img src="https://dados.fortaleza.ce.gov.br/base/assets/images/ainformacao.png" alt="icone acesso informação" width="35" />
                        </a>
                    </div>
                    <div className="col-sm-12 d-flex align-items-center justify-content-center">

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer