import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from 'react-bootstrap'
import Image from 'next/image';
import IconPraca from '../../public/icons/praca.png';
import IconTerminal from '../../public/icons/terminal.png';
import IconBrt from '../../public/icons/brt.png';
import IconPublic from '../../public/icons/public.png';
import IconOutros from '../../public/icons/outro.png';

const Pontos: React.FunctionComponent = () =>{

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <section id="anchorMis" className="s-content s-local bg-main ">
            <>            
                <Container>
                    <Row>
                        <Col>                    
                            <h4 className="text-center font-weight-bold text-white mb-5">Locais com Wi-Fi por tipo</h4>
                            <Row className='mb-2'>
                                <Col>                            
                                    <div className="icon-box iconbox-blue" data-aos="zoom-in" data-aos-delay="100" onClick={handleShow}>
                                        <div className="icon">
                                            <Image 
                                                src={IconPraca}  
                                                alt="icone para praças"  
                                                id="iconPraca" 
                                                priority={true}
                                                width={135}
                                                height={125}
                                            />
                                        </div>
                                        <h4>Praças</h4>
                                    </div>
                                </Col>

                                <Col>
                                    <div className="icon-box iconbox-orange " data-aos="zoom-in" data-aos-delay="200">
                                        <div className="icon">
                                            <Image 
                                                src={IconTerminal}  
                                                alt="icone para Terminais"  
                                                id="iconTerminal" 
                                                priority={true}
                                                width={135}
                                                height={125}
                                            />
                                        </div>
                                        <h4>Terminais</h4>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="icon-box iconbox-orange " data-aos="zoom-in" data-aos-delay="200">
                                        <div className="icon">
                                            <Image 
                                                src={IconBrt}  
                                                alt="icone para BRT"  
                                                id="iconBrt" 
                                                priority={true}
                                                width={135}
                                                height={125}
                                            />
                                        </div>
                                        <h4>Terminais</h4>
                                    </div>      
                                </Col>
                            </Row>

                            <Row className="d-flex justify-content-center">
                                <Col>                            
                                    <div className="icon-box iconbox-orange " data-aos="zoom-in" data-aos-delay="200">
                                        <div className="icon">
                                            <Image 
                                                src={IconPublic}  
                                                alt="icone para equipamentos publicos"  
                                                id="iconPublic" 
                                                priority={true}
                                                width={135}
                                                height={125}
                                            />
                                        </div>
                                        <h4>Equipamentos públicos</h4>
                                    </div>  
                                </Col>
                                <Col>                            
                                    <div className="icon-box iconbox-orange " data-aos="zoom-in" data-aos-delay="200">
                                        <div className="icon">
                                            <Image 
                                                src={IconOutros}  
                                                alt="icone outros"  
                                                id="iconOutro" 
                                                priority={true}
                                                width={135}
                                                height={125}
                                            />
                                        </div>
                                        <h4>Outros</h4>
                                    </div>  
                                </Col>
                            </Row>
                        </Col>
                        
                        <Col>                    
                            <label className="text-white text-center">
                                <b>Saiba onde há Wi-Fi público e gratuito em Fortaleza</b>
                            </label>
                            <div className="card p-4 mt-3">
                                <ul className="pl-0 font-weight-bold list-unstyled">
                                    <li><i className="icon-feed icons mr-2 font-weight-bold"></i> 102 pontos Wi-Fi</li>
                                    <li><i className="icon-people icons mr-2 font-weight-bold"></i> 675.022 Total de usuários cadastrados</li>
                                    <li><i className="icon-location-pin icons mr-2 font-weight-bold"></i> 67 praças</li>
                                    <li><i className="icon-location-pin icons mr-2 font-weight-bold"></i> 3 Cucas</li>
                                    <li><i className="icon-location-pin icons mr-2 font-weight-bold"></i> 7 Terminais de ônibus</li>
                                    <li><i className="icon-location-pin icons mr-2 font-weight-bold"></i> 17 estações de BRT</li>
                                    <li><i className="icon-location-pin icons mr-2 font-weight-bold"></i> 3 Areninhas</li>
                                    <li><i className="icon-location-pin icons mr-2 font-weight-bold"></i> 2 Calçadões ( Beira-mar e Praia de Iracema )</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Wi-For - Praças</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='list-unstyled'>
                        <ul>
                            <li> Praça dos Leões</li>
                            <li> Praça da Bandeira</li>
                            <li> Praça dos Voluntários</li>
                            <li> Praça do Ferreira</li>
                            <li> Largo Travessa Crato</li>
                            <li> Praça Waldir Campos</li>
                            <li> Praça do Riacho Doce</li>
                            <li> Praça Conjunto dos Bancários</li>
                            <li> Praça Patrão Mor Aguiar</li>
                            <li> Praça Coronel João Pontes</li>
                            <li> Área Verde Bosque do Bem</li>
                            <li> Praça do Beira Rio</li>
                            <li> Praça Central Cidade 2000</li>
                            <li> Jardim Japonês</li>
                            <li> Praça Francisco Rodrigues Sancho</li>
                            <li> Praça Luiza Távora</li>
                            <li> Praça da Paz Dom Helder Câmara</li>
                            <li> Praça Martins Dourado</li>
                            <li> Praça da Iba</li>
                            <li> Morro de Santa Terezinha</li>
                            <li> Praça Portugal</li>
                            <li> Praça da Imprensa Chanceler Edson Queiroz</li>
                            <li> Praça Carlos Alberto Studart Gomes (Praça das Flores)</li>
                            <li> Praça Dom Lustosa</li>
                            <li> Praça Joaquim Nogueira</li>
                            <li> Praça Ipiranga</li>
                            <li> Praça Ari de Sá</li>
                            <li> Praça José Carlos Gaspar</li>
                            <li> Praça Prisco Bezerra</li>
                            <li> Praça João XXIII</li>
                            <li> Praça do Jardim América (Frei Galvão)</li>
                            <li> Praça da República</li>
                            <li> Praça 1º de Maio</li>
                            <li> Praça Mauá</li>
                            <li> Praça Nossa Sra. de Fátima</li>
                            <li> Praça da Gentilândia</li>
                            <li> Praça da Juventude (Granja Portugal)</li>
                            <li> Praça Padre Cícero</li>
                            <li> Praça Jardim Fluminense</li>
                            <li> Praça São José</li>
                            <li> Praça Planalto Vitória</li>
                            <li> Praça Luiz Gonzaga (Polo de Lazer)</li>
                            <li> Praça Santa Cecília</li>
                            <li> Polo de Lazer do Conjunto Esperança (e Areninha)</li>
                            <li> Praça UV3 Conjunto Ceará</li>
                            <li> Praça Genésio Queiroz - Praça da Juventude do Edson Queiroz</li>
                            <li> Praça da igreja São José (Lagoa Redonda)</li>
                            <li> Praça da igreja N. Sra. da Conceição</li>
                            <li> Praça de Esporte do Copacabana</li>
                            <li> Praça da igreja da Glória</li>
                            <li> Praça Sítio São João</li>
                            <li> Praça João Paulo II</li>
                            <li> Praça Campo Estrela Jangurussu</li>
                            <li> Praça Pio X</li>
                            <li> Praça Farias Brito</li>
                            <li> Praça Deputado Paulo Benevides</li>
                            <li> Polo de Lazer Lago Jacarey</li>
                            <li> Praça José de Alencar</li>
                            <li> Praça Mercado Central</li>
                            <li> Praça Coração de Jesus</li>
                            <li> Passeio Público</li>
                            <li> Praça do Estação</li>
                            <li> Parque das Crianças</li>
                            <li> Praça Murilo Borges</li>
                            <li> Praça São Sebastião</li>
                            <li> Praça Mercado dos Pinhões</li>
                        </ul>
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
            </>
        </section>
    )
}

export default Pontos;