import React, { useState, useRef, useLayoutEffect, useCallback } from 'react';
import {useEffect} from "react";

const HolderCircle: React.FunctionComponent = () =>{

    if (typeof(window) === 'object') {
        // Check if document is finally loaded
        document.addEventListener("DOMContentLoaded", function () {
            alert('Finished loading document');
        });
    }

    const elementRef = useRef(null);
    const intervalRef = useRef();
    const circleContainer = useRef();
    const [ pilar, setPilar ] = useState([]);
    const [key, setKey] = useState('');

    const fetchPilar = useCallback( async () =>{
        const response = await fetch('http://localhost:3000//api/pilar');
        const json   = await response.json() 
        setPilar(json)
    },[])


    const onButtonClick = useCallback( async (e: MouseEvent) =>{
        console.log(e);
        console.log(e.currentTarget);
    },[])


    useEffect(() => {
        
        fetchPilar();
        return () => {}

    }, [fetchPilar]);

    useEffect(() => {    

        let fields:any = document.querySelectorAll('.itemDot');
        let container:any = document.querySelectorAll('.dotCircle');
        let itemDot:any = document.querySelectorAll('.itemDot');  
        let cirItem: any = document.querySelectorAll('.CirItem');
        let dotCircle:any = document.querySelector(".dotCircle");


        //variavies para circulo
        let i: number = 2;
        let radius: number = 200;
        let width: number = container[0].clientWidth;
        let height: number = container[0].clientHeight;
        let angle:number = 0;
        let step:number = (2 * Math.PI) / fields.length;
        radius = width / 2.5;

        //angulos dos campos
        fields.forEach((e:any)=>{
            let x:number = Math.round(width / 2 + radius * Math.cos(angle) - e.clientWidth / 2);
            let y:number = Math.round(height / 2 + radius * Math.sin(angle) - e.clientHeight / 2);

            e.style.left = x + 'px';
            e.style.top = y + 'px';
            angle += step;
        });


        setInterval(function () {

            let dataTab: any = document.querySelectorAll('.itemDot.active')[0].getAttribute('data-tab');
            if (dataTab > 6 || i > 6) {
                dataTab = 1;
                i = 1;
            }

            for (let i = 0; i < itemDot.length; i++) {
                const element = itemDot[i];
                console.log(element);
                element.classList.remove('active');
            }

            let usingDt: any = document.querySelector('[data-tab="' + i + '"]');
            usingDt.classList.add("active");

            let cirItemNum: any = document.querySelectorAll(`.CirItem${i}`);

            for (let i = 0; i < cirItem.length; i++) {
                const element = cirItem[i];
                element.classList.remove('active');
            }

            for (let i = 0; i < cirItemNum.length; i++) {
                const element = cirItemNum[i];
                element.classList.add('active');
            }
            i++;

            dotCircle.style.transform = "rotate(" + (360 - (i - 2) * 36) + "deg)";
            dotCircle.style.transition = "2s";

            itemDot.forEach((element:any) => {
                element.style.transform = "rotate(" + (i - 2) * 36 + "deg)";
                element.style.transition = "1s";
            });

        }, 5000);

        const ontesteClick = (e:MouseEvent) => {
            console.log(e.currentTarget);
            setKey(e.key);
            console.log("testando");
        };

        document.addEventListener('click', ontesteClick);

        onButtonClick();

        return () => {
            document.addEventListener('click', ontesteClick);
        }
    }, [pilar, onButtonClick]);


    

    return(
        <>
                <div className="holderCircle p-4 d-none d-md-block">
                    <div className="round"></div>
                        <div className="dotCircle">
                        {pilar.map((e,i) => (
                            <>  
                            <span className={`itemDot itemDot${i + 1} ${(i === 0 ? 'active' : '')}`} onClick={onButtonClick} data-tab={i +1}>
                                <i className={e.icon} key={i}></i>
                                <span className="forActive"></span>
                            </span>
                            </>
                        ))}                                
                        </div>

                        <div className="contentCircle">
                        {pilar.map((e,i) => (
                            <>                              
                            <div className={`CirItem title-box CirItem${i + 1} ${(i === 0 ? 'active' : '')}`}>
                                <h2 className="title">
                                    <span key={e.title}>{e.title}</span>
                                </h2>
                                <p>
                                    {e.description}
                                </p>
                                <i className={e.icon}></i>
                            </div>
                            </>
                        ))}                                  
                        </div>                 
                </div>
        </>
    )
}

export default HolderCircle;

