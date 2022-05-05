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
                <div id="faq">
                    <Accordion defaultActiveKey={['0']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Accordion Item #1</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Accordion Item #2</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
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