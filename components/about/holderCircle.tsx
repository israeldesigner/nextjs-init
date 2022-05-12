import React, { useState, useRef, useLayoutEffect } from 'react';
import {useEffect} from "react";

const HolderCircle: React.FunctionComponent = () =>{

    if (typeof(window) === 'object') {
        // Check if document is finally loaded
        document.addEventListener("DOMContentLoaded", function () {
            alert('Finished loading document');
        });
    }

    const elementRef = useRef(null);

    const _title: string[] = ['Expansão da rede', 'Disponibilidade', 'Inclusão Digital', 'Conectividade', 'Cidadania Digital', 'Segurança'];
    const _circDescription: string[] = [
        "Wi-Fi mais perto de você",
        "Internet 24 horas por dia 7 dias por semana",
        "Democratização do acesso",
        "Internet para quem mais precisa",
        "Direitos e deveres da cultura de acesso à internet.",
        "Wi-For, Respeita a privacidade dos seus dados e obdece no que diz respeito a LGPD"
    ];
    const _iconsCircle: string[] = ["icon-feed", "icon-location-pin", "icon-people", "icon-globe", "icon-organization", "icon-shield"];
    const [value, setValue] = useState(() => () => console.log("default ooops"));

    useEffect(() => {

        const divElement = elementRef.current;

        //variaveis dos seletores
        let fields = document.querySelectorAll('.itemDot');
        let container = document.querySelectorAll('.dotCircle');
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
        fields.forEach((e:any,i)=>{
            let x:number = Math.round(width / 2 + radius * Math.cos(angle) - e.clientWidth / 2);
            let y:number = Math.round(height / 2 + radius * Math.sin(angle) - e.clientHeight / 2);

            e.style.left = x + 'px';
            e.style.top = y + 'px';
            angle += step;
        });


        
        const valeTestando = () => {
            let fields = document.querySelectorAll('.itemDot');
            setValue(value);
        }
        //   $(".itemDot").click(function () {
        //     var dataTab = $(this).data("tab");
        //     $(".itemDot").removeClass("active");
        //     $(this).addClass("active");
        //     $(".CirItem").removeClass("active");
        //     $(".CirItem" + dataTab).addClass("active");
        //     i = dataTab;

        //     $(".dotCircle").css({
        //         transform: "rotate(" + (360 - (i - 1) * 36) + "deg)",
        //         transition: "2s",
        //     });
        //     $(".itemDot").css({
        //         transform: "rotate(" + (i - 1) * 36 + "deg)",
        //         transition: "1s",
        //     });
        // });
        setValue(valeTestando);



        setInterval(function () {

            let dataTab: any = document.querySelectorAll('.itemDot.active')[0].getAttribute('data-tab');
            if (dataTab > 6 || i > 6) {
                dataTab = 1;
                i = 1;
            }

            for (let i = 0; i < itemDot.length; i++) {
                const element = itemDot[i];
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

    }, [value]);
    
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Flavio');


    // useLayoutEffect(() => {


    //     },[value]
    // );


    

    return(
        <>
            <div className="holderCircle p-4 d-none d-md-block">
                <div className="round"></div>
                <div className="dotCircle">
                    {
                        _iconsCircle.map((icon,i) => (
                            <>                            
                            <span className={`itemDot active itemDot${i + 1}`}   onClick={() => setValue(() => value)}  ref={elementRef} data-tab={i +1}>
                                <i className={icon} key={i}></i>
                                <span className="forActive"></span>
                            </span>
                            </>
                        ))
                    }
                </div>

                <div className="contentCircle">

                    {
                        _title.map((title,i) => (
                            <>                            
                                <div className={`CirItem title-box active CirItem${i + 1}`}>
                                    <h2 className="title">
                                        <span key={i}>{title}</span>
                                    </h2>
                                    <p>
                                        Wi-Fi mais perto de você
                                    </p>
                                    <i className="icon-feed icons"></i>
                                </div>
                            </>
                        ))
                    }
                </div> 

            </div>
        </>
    )
}

export default HolderCircle;

