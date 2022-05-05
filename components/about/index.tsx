import { Col, Container, Row } from 'react-bootstrap'

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
                                </article>
                                <h3 className="mb-0 text-center font-weight-bold mt-5">Pilares do Wi-For</h3>

                                <div className="holderCircle p-4 d-none d-md-block">
                                    <div className="round"></div>
                                    <div className="dotCircle">
                                    <span className="itemDot active itemDot1" data-tab="1">
                                        <i className="icon-feed icons"></i>
                                    <span className="forActive"></span>
                                    </span>
                                    <span className="itemDot itemDot2" data-tab="2">
                                        <i className="icon-location-pin icons"></i>
                                    <span className="forActive"></span>
                                    </span>
                                    <span className="itemDot itemDot3" data-tab="3">
                                        <i className="icon-people icons"></i>
                                    <span className="forActive"></span>
                                    </span>
                                    <span className="itemDot itemDot4" data-tab="4">
                                        <i className="icon-globe icons"></i>
                                    <span className="forActive"></span>
                                    </span>
                                    <span className="itemDot itemDot5" data-tab="5">
                                        <i className="icon-organization icons"></i>
                                    <span className="forActive"></span>
                                    </span>
                                    <span className="itemDot itemDot6" data-tab="6">
                                        <i className="icon-shield icons"></i>
                                    <span className="forActive"></span>
                                    </span>
                                    </div>
                                    <div className="contentCircle">
                                    <div className="CirItem title-box active CirItem1">
                                        <h2 className="title"><span>Expansão da rede</span></h2>
                                        <p>
                                            Wi-Fi mais perto de você
                                        </p>
                                        <i className="icon-feed icons"></i>
                                    </div>
                                    <div className="CirItem title-box CirItem2">
                                        <h2 className="title"><span>Disponibilidade </span></h2>
                                        <p>Internet 24 horas por dia 7 dias por semana</p>
                                            <i className="icon-location-pin icons"></i>
                                    </div>
                                    <div className="CirItem title-box CirItem3">
                                        <h2 className="title"><span>Inclusão Digital</span></h2>
                                        <p>Democratização do acesso </p>
                                        <i className="icon-people icons"></i>
                                    </div>
                                    <div className="CirItem title-box CirItem4">
                                        <h2 className="title"><span>Conectividade</span></h2>
                                        <p>Internet para quem mais precisa</p>
                                        <i className="icon-organization icons"></i>
                                    </div>
                                    <div className="CirItem title-box CirItem5">
                                        <h2 className="title"><span>Cidadania Digital </span></h2>
                                        <p>Direitos e deveres da cultura de acesso à internet.</p>
                                        <i className="icon-share icons"></i>
                                    </div>
                                    <div className="CirItem title-box CirItem6">
                                        <h2 className="title"><span>Segurança</span></h2>
                                        <p>Wi-For, Respeita a privacidade dos seus dados e obdece no que diz respeito a LGPD.</p>
                                        <i className="icon-shield icons"></i>
                                    </div>
                                    </div>
                                </div>

                                <div className="my-5">
                                    <div className="steps" id="stepWizard">
                                        <div className="step position-relative">
                                            <div className="step-heading position-static" id="step1">
                                                <a className="" role="button" data-toggle="collapse" href="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                                    <div className="num d-inline-flex text-white align-items-center justify-content-center position-relative rounded-circle bg-orange">
                                                        <i className="icon-people icons"></i>
                                                    </div>
                                                    <div className="pl-4 d-inline-flex title">Inclusão Digital</div>
                                                </a>
                                            </div>

                                            <div className="line position-absolute"></div>

                                            <div id="collapse1" className="pl-5 collapse show" aria-labelledby="step1" data-parent="#stepWizard">
                                                <div className="step-body">
                                                    Democratização do acesso
                                                </div>
                                            </div>
                                        </div>

                                        <div className="step position-relative">
                                            <div className="step-heading position-static" id="step2">
                                                <a className="" role="button" data-toggle="collapse" href="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                                    <div className="num d-inline-flex text-white align-items-center justify-content-center position-relative rounded-circle bg-orange">
                                                        <i className="icon-feed icons"></i>
                                                    </div>
                                                    <div className="pl-4 d-inline-flex title">Expansão da rede</div>
                                                </a>
                                            </div>

                                            <div className="line position-absolute"></div>

                                            <div id="collapse2" className="pl-5 collapse" aria-labelledby="step2" data-parent="#stepWizard">
                                                <div className="step-body">
                                                    Wi-Fi mais perto de você
                                                </div>
                                            </div>
                                        </div>

                                        <div className="step position-relative">
                                            <div className="step-heading position-static" id="step3">
                                                <a className="" role="button" data-toggle="collapse" href="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                                    <div className="num d-inline-flex text-white align-items-center justify-content-center position-relative rounded-circle bg-orange">
                                                        <i className="icon-globe icons"></i>
                                                    </div>
                                                    <div className="pl-4 d-inline-flex title">Conectividade</div>
                                                </a>
                                            </div>

                                            <div className="line position-absolute"></div>

                                            <div id="collapse3" className="pl-5 collapse" aria-labelledby="step3" data-parent="#stepWizard">
                                                <div className="step-body">
                                                    Internet para quem mais precisa
                                                </div>
                                            </div>
                                        </div>

                                        <div className="step position-relative">
                                            <div className="step-heading position-static" id="step4">
                                                <a className="" role="button" data-toggle="collapse" href="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                                    <div className="num d-inline-flex text-white align-items-center justify-content-center position-relative rounded-circle bg-orange">
                                                        <i className="icon-organization icons"></i>
                                                    </div>
                                                    <div className="pl-4 d-inline-flex title">Cidadania digital</div>
                                                </a>
                                            </div>

                                            <div className="line position-absolute"></div>

                                            <div id="collapse4" className="pl-5 collapse" aria-labelledby="step4" data-parent="#stepWizard">
                                                <div className="step-body">
                                                    Direitos e deveres da cultura de acesso à internet.
                                                </div>
                                            </div>
                                        </div>

                                        <div className="step position-relative">
                                            <div className="step-heading position-static" id="step5">
                                                <a className="" role="button" data-toggle="collapse" href="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                                    <div className="num d-inline-flex text-white align-items-center justify-content-center position-relative rounded-circle bg-orange">
                                                        <i className="icon-location-pin icons"></i>
                                                    </div>
                                                    <div className="pl-4 d-inline-flex title">Disponibilidade</div>
                                                </a>
                                            </div>

                                            <div className="line position-absolute"></div>

                                            <div id="collapse5" className="pl-5 collapse" aria-labelledby="step5" data-parent="#stepWizard">
                                                <div className="step-body">
                                                    Internet 24 horas por dia 7 dias por semana
                                                </div>
                                            </div>
                                        </div>

                                        <div className="step position-relative">
                                            <div className="step-heading position-static" id="step6">
                                                <a className="" role="button" data-toggle="collapse" href="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                                    <div className="num d-inline-flex text-white align-items-center justify-content-center position-relative rounded-circle bg-orange">
                                                        <i className="icon-shield icons"></i>
                                                    </div>
                                                    <div className="pl-4 d-inline-flex title">Segurança</div>
                                                </a>
                                            </div>

                                            <div className="line position-absolute"></div>

                                            <div id="collapse6" className="pl-5 collapse" aria-labelledby="step6" data-parent="#stepWizard">
                                                <div className="step-body">
                                                    Wi-For, Respeita a privacidade dos seus dados e obdece no que diz respeito a LGPD.
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About