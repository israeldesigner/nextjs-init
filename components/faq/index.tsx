import { Accordion, Col, Container, Row } from 'react-bootstrap';

const FaqSection: React.FunctionComponent = ( props ) =>{
    return (
        <section id="anchorFaq" className="s-content s-faq">
            <Container>
                <Row>
                    <Col>
                        <h2 className="text-center s-content__title--main mb-4 text-black">
                            <b>Dúvidas Frequentes</b>
                        </h2>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                <Col>
                    <div className="accordion" id="faq">
                        <Accordion>
                            <Accordion.Item eventKey="0" className='card'>
                                <Accordion.Header className='card-header'>Preciso pagar pra usar?</Accordion.Header>
                                <Accordion.Body className='card-body'>
                                    Não. O serviço é gratuito.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" className='card'>
                                <Accordion.Header className='card-header'>Preciso realizar algum cadastro?</Accordion.Header>
                                <Accordion.Body className='card-body'>
                                    Sim. Na primeira vez que você for utilizar o serviço, é necessário fornecer alguns dados básicos.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" className='card'>
                                <Accordion.Header className='card-header'>Onde estão os pontos do programa Wi-For?</Accordion.Header>
                                <Accordion.Body className='card-body'>
                                    Pode encontrar no mapa a seguir <a href="#" className="linkAnchorFor">Mapa</a>.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3" className='card'>
                                <Accordion.Header className='card-header'>Quem pode acessar o Wi-For? </Accordion.Header>
                                <Accordion.Body className='card-body'>
                                    Todas as pessoas que circulam nos locais onde há um ponto instalado do Programa <b>Wi-For</b>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4" className='card'>
                                <Accordion.Header className='card-header'>O sinal está fora do ar. O que fazer neste caso?</Accordion.Header>
                                <Accordion.Body className='card-body'>
                                    O usuário deverá ligar para a Central <a href="tel:156">156</a> ou fale conosco e informar o endereço do wi-fi para correção.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5" className='card'>
                                <Accordion.Header className='card-header'>A Prefeitura fará coleta de algum dado pessoal durante a navegação?</Accordion.Header>
                                <Accordion.Body className='card-body'>
                                    Não. As regras do programa proíbem a coleta de dados pessoais. Só coletamos dados referentes à qualidade do serviço,
                                    como velocidade de conexão, número de usuários simultâneos, consumo total de banda e disponibilidade do serviço nas localidades,
                                    por exemplo, que não violam a privacidade dos cidadãos e permitem à Prefeitura monitorar e melhorar a qualidade do serviço oferecido.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </Col>
                </Row>
            </Container>
        </section>
    )
}


export default FaqSection;