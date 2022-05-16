import * as React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import {useEffect, useState} from "react";
import { ReactChild, ReactFragment, ReactPortal } from 'react';
import { GetPilars } from '../../functions/getPilars';
import { PilarData } from '../../domain/pilar/pilar';
import { Accordion } from 'react-bootstrap';


const API_URL_BLOG = 'https://blogidesign.herokuapp.com';
const POSTS_APIS = `${API_URL_BLOG}/posts`;


console.log(typeof(POSTS_APIS));

type Post = {
    title: string
    content: string
}

type Pilar = {
    id: string,
    title: string,
    description: string,
    icon: string

}

export const getStaticProps: GetStaticProps = async (context) => {

    const res = await fetch(`${POSTS_APIS}`);
    const resPilar = await fetch(`http://localhost:3000/api/pilar`);
    const posts: Post[] = await res.json();
    const pilar: Pilar[] = await resPilar.json();

    console.log(context);
  
    return {
      props: {
        posts,
        pilar
      },
    }
}

const Blog: React.FunctionComponent= ({posts, pilar}) =>  {

    // React way get api 
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
        <ul>
            {advice.map((e,i) => (
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
        </ul>
        <hr />
        <ul>
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
        </ul>
        <ul>
            {posts.map((post: { id: React.Key | null | undefined; title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; cover: { hash: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }; }, i: any) => (
                <>            
                    <li key={post.id} className="text-primary">{post.title}</li>
                    <li className='text-danger'>{post.cover.hash}</li>
                </>
            ))}
        </ul>
        </>
        
    );

}

export default Blog

