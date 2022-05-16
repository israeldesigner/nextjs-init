import React, { useState, useEffect } from 'react';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';
import Accordion from 'react-bootstrap/Accordion';
import { getPilars } from '../../functions/getPilars';
import { PilarData } from '../../domain/pilar/pilar';

// export type PilarProps = {
//     pilars: PilarData[];
// };

// export const getStaticProps: GetStaticProps = async () => {

//     const pilars = await getPilars();

//     return{
//         props:{ pilars }
//     }


// }

type Pilar = {
    id: string,
    title: string,
    description: string,
    icon: string

}

export const getStaticProps: GetStaticProps = async (context) => {
    const resPilar = await fetch(`http://localhost:3000/api/pilar`);
    const pilar: Pilar[] = await resPilar.json();

    console.log(context);
  
    return {
      props: {
        pilar
      },
    }
}

const MobileHolder: React.FunctionComponent= ({pilar}) => {


    return (
        <>   
            {pilar.map((e) => (
                <>            
                <Accordion className="steps">
                    <Accordion.Item eventKey={e.id} className='step position-relative'>
                        <Accordion.Header className="step-heading position-static">
                            <div className="num d-inline-flex text-white align-items-center justify-content-center position-relative rounded-circle bg-orange">
                                <i className={`${e.icon}`}></i>
                            </div>
                            <div className="pl-4 d-inline-flex title">{e.title} </div>
                        </Accordion.Header>
                        <Accordion.Body className="step-body">
                            {e.description}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </>
            ))}
        </>
    )

}

export default MobileHolder