import * as React from 'react';
import {useEffect, useState} from "react";
import { GetStaticProps } from 'next';
import { InferGetStaticPropsType } from 'next';
import { getPilars } from '../../functions/getPilars';
import { PilarData } from '../../domain/pilar/pilar';
import Accordion from 'react-bootstrap/Accordion';

// export type PilarProps = {
//     pilars: PilarData[];
// };

// export const getStaticProps: GetStaticProps = async () => {

//     const pilars = await getPilars();

//     return{
//         props:{ pilars }
//     }


// }


const MobileHolder: React.FunctionComponent = ({pilars}) => {
    const [advice, setAdvice] = useState([]);
    useEffect(() => {
        let locationTotal = location.href;
        let urlExtense = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
        let base_url = window.location.origin;
        let host = window.location.host;
        let pathArray = window.location.pathname.split( '/' );
    
        const url = `${base_url}/api/pilar`;
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setAdvice(json);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    
    },[advice])
    return (
        <>        
            {advice.map((e) => (
                <>            
                <Accordion className="steps"  defaultActiveKey="0">
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