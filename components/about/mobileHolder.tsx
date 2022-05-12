import React, { useState, useEffect } from 'react';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';
import Accordion from 'react-bootstrap/Accordion';



const MobileHolder: React.FunctionComponent = (props) =>{

    type Data = [
        {
          id: number
          title: string,
          description: string,
          icon:string
        }
    ]  
    
    
    
    const dataFaqs =   
      [
        { 
            id: "0",
            title: 'Expansão da rede',
            description: 'Wi-Fi mais perto de você',
            icon: 'icon-feed'
        },
        { 
            id: "1",
            title: 'Disponibilidade',
            description: 'Internet 24 horas por dia 7 dias por semana',
            icon: 'icon-location-pin'
        },
        { 
            id: "2",
            title: 'Inclusão Digital',
            description: 'Democratização do acesso',
            icon: 'icon-people'
        },
        { 
            id: "3",
            title: 'Conectividade',
            description: 'Internet para quem mais precisa',
            icon: 'icon-globe'
        },
        { 
            id: "4",
            title: 'Cidadania Digital',
            description: 'Direitos e deveres da cultura de acesso à internet.',
            icon: 'icon-organization'
        },
        { 
            id: "5",
            title: 'Segurança',
            description: 'Wi-For, Respeita a privacidade dos seus dados e obdece no que diz respeito a LGPD',
            icon: 'icon-shield'
        },
    ] 
    useEffect(() => {
        console.log(dataFaqs);
        dataFaqs.forEach((e,i) => {
            console.log(e);
        });
    },[])

    


    return (
        <>   
            {
                // dataFaqs.map((faq,i) => (
                //     <> 
                //         <pre>
                //             {faq}
                //             {i}
                //         </pre>
                //         <Accordion className="steps" id="stepWizard">
                //             <Accordion.Item eventKey="0" className='step position-relative'>
                //                 <Accordion.Header className="step-heading position-static">
                //                     <div className="num d-inline-flex text-white align-items-center justify-content-center position-relative rounded-circle bg-orange">
                //                         <i className="icon-people icons"></i>
                //                     </div>
                //                     <div className="pl-4 d-inline-flex title">Inclusão Digital </div>
                //                 </Accordion.Header>
                //                 <Accordion.Body className="step-body">
                //                     Democratização do acesso
                //                 </Accordion.Body>
                //             </Accordion.Item>
                //         </Accordion>
                //     </>
                // ))
            }
        </>
    )

}

export default MobileHolder