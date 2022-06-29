import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useState } from 'react'

const Contato: React.FunctionComponent = () =>{

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [subject, setSubject] = useState('');
const [submitted, setSubmitted] = useState(false);

const handleSubmit = (e) => {
    e.preventDefault()
    console.log('enviando...')

    let data = {
        name,
        email,
        subject,
        message
    }

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
        console.log('Resposta received')
        if (res.status === 200) {
            console.log('Sucesso succeeded!')
            setSubmitted(true) 
            setName('')
            setEmail('')
            setSubject('')
            setMessage('')
        }
    })
  }
 
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
                                <Form.Control type="text" name="name" onChange={(e)=>{setName(e.target.value)}} placeholder="Nome completo" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="seuemail@examplo.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Assunto</Form.Label>
                                <Form.Control type="text" name="subject" onChange={(e)=>{setSubject(e.target.value)}} placeholder="Assunto da mensagem" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Mensagem</Form.Label>
                                <Form.Control as="textarea" name="message" onChange={(e)=>{setMessage(e.target.value)}} rows={4} />
                            </Form.Group>
                            <Button variant='success' onClick={(e)=>{handleSubmit(e)}}> Enviar </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contato;