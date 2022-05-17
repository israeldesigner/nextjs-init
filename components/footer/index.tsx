import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import classes from './Footer.module.scss';
import LogoWifor from '../../public/img/logo-wifor.png';
import LogoPmf from '../../public/img/logoPref.png';
import LogoAcesso from '../../public/img/logo-esic.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Footer:React.FunctionComponent = (props) =>{
    return(
        <>
            <AnchorLink href='#acessibility' className="btnTop txt-white btn">
                <i className="icon-arrow-up-circle icons text-white mr-1"></i>
                <span className='text-white'> 
                    Voltar Ao topo
                </span>
            </AnchorLink>       
            <footer id="footer" className="s-footer">
                <Container>
                    <Row>
                        <Col className='s-footer__blockLogo' md={{ span: 3, order: 'first' }} sm={{ span: 12,  order: 'last' }} xs={{order: 'last'}}>
                            <a href="#" >
                                <Image 
                                    src={LogoWifor}  
                                    alt="Logo da Prefeitura Wi For"  
                                    id="logoPrefBranca" 
                                    className=""
                                    width={165}
                                    height={89}
                                />
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
                        </Col>
                        <Col className='' md={{ span: 6 }} sm={{ span: 12 }}>                    
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
                        </Col>
                        <Col className='' md={{ span: 3, order: 'last' }} sm={{ span: 12,  order: 'first' }} xs={{order: 'first'}}>                    
                            <Image 
                                src={LogoPmf}  
                                alt="Logo prefeitura de Fortaleza"  
                                className=""
                                width={250}
                                height={75}
                                priority={true}
                            />
                            <br />
                            <br />
                            <a target="_blank" data-toggle="tooltip" className="mt-3"
                            href="https://acessoainformacao.fortaleza.ce.gov.br/sistema/site/index.html?ReturnUrl=%2fsistema%2f" rel="noreferrer">
                            <Image 
                                src={LogoAcesso}  
                                alt="Logo acesso Esic"  
                                className=""
                                priority={true}
                            />
                            </a>
                        </Col>
                    </Row>
                </Container>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 d-block">
                        </div>
                        <div className="col-sm-12 d-flex align-items-center justify-content-center">

                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer