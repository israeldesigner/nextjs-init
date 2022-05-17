import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Contato: React.FunctionComponent = () =>{
 
    return(
        <section id="anchorCon" className="s-content s-connect">
            <Container>
                <Row>
                    <Col className="text-center">
                        <h2 className="text-center s-content__title--main mb-4 text-black font-weight-bold">
                            Fale conosco
                        </h2>
                    </Col>
                </Row>
                <Row className="">
                    <Col lg={{ span: 6, offset: 3 }} md={{ span: 12, offset: 0 }}>                    
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" placeholder="Nome completo" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="seuemail@examplo.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Assunto</Form.Label>
                                <Form.Control type="text" placeholder="Assunto da mensagem" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Mensagem</Form.Label>
                                <Form.Control as="textarea" rows={4} />
                            </Form.Group>
                            <Button variant='success'> Enviar </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contato;