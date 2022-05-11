import React, { useState } from 'react'
import useCollapse from 'react-collapsed'
import Accordion from 'react-bootstrap/Accordion'



const MobileHolder: React.FunctionComponent = (props) =>{
    
    const { getCollapseProps, getToggleProps } = useCollapse()

    return (
        <div className="my-5">
            <div className="steps" id="stepWizard">
                <div className="step position-relative">
                    <div className="step-heading position-static" id="step1">
                        <button className="" {...getToggleProps()} type="button">
                            <div className="num d-inline-flex text-white align-items-center justify-content-center position-relative rounded-circle bg-orange">
                                <i className="icon-people icons"></i>
                            </div>
                            <div className="pl-4 d-inline-flex title">Inclusão Digital </div>
                        </button>
                    </div>

                    <div className="line position-absolute"></div>

                    <div className="pl-5" aria-labelledby="step1" {...getCollapseProps()}>
                        <div className="step-body">
                            Democratização do acesso
                        </div>
                    </div>
                </div>

                <div className="step position-relative">
                    <div className="step-heading position-static" id="step2">
                        <button className="" {...getToggleProps()} >
                            <div className="num d-inline-flex text-white align-items-center justify-content-center position-relative rounded-circle bg-orange">
                                <i className="icon-feed icons"></i>
                            </div>
                            <div className="pl-4 d-inline-flex title">Expansão da rede</div>
                        </button>
                    </div>

                    <div className="line position-absolute"></div>

                    <div {...getCollapseProps()} className="pl-5 collapse">
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
    )

}

export default MobileHolder