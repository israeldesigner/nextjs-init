import React, { useState, useEffect } from 'react';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';
import Accordion from 'react-bootstrap/Accordion';



const MobileHolder: React.FunctionComponent = (props) =>{


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