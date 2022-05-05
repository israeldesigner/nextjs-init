import dynamic from 'next/dynamic';
import { Col, Container, Row } from 'react-bootstrap';
import  HolderCircler from './holderCircle';
import MobileHolder from './mobileHolder';

const About: React.FunctionComponent = () =>{
    return(
        <section id="anchorCom" className="s-content s-coiq-features bg-white">
            <Container>
                <Row>
                    <Col>
                        <h2 className="text-center s-content__title--main mb-4 text-black font-weight-bold">
                            Wi-Fi público e gratuito em Fortaleza – O Programa Wi-For
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="jumbotron bg-white">
                            <article className="lead"data-aos="fade-right" >
                                O Wi-For tem como princípios a promoção da cidadania e a inclusão digital, possibilitando a democratização do acesso à Internet e
                                facilitando ao cidadão o acesso à informação, à cultura, aos serviços digitais e à educação.
                                Hoje são <b className="text-orange">102 pontos</b> disponíveis em diversas localidades de Fortaleza.
                                <hr />
                                <h3 className="mb-0 text-center font-weight-bold mt-5">Pilares do Wi-For</h3>
                            </article>

                            <HolderCircler />
                            <MobileHolder />

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About