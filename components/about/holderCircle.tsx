import React from 'react';
import {useEffect} from "react";

const HolderCircle: React.FunctionComponent = () =>{
    
    // const [_document, set_document] = React.useState(null);
    // React.useEffect(() => {
    //     return set_document(document);
    // }, [])

    if (typeof(window) === 'object') {
        // Check if document is finally loaded
        document.addEventListener("DOMContentLoaded", function () {
            alert('Finished loading document');
        });
    }

    useEffect(() => {
        let i: number = 2;
        let radius: number = 200;
        const fields = document.querySelectorAll('.itemDot');
        const container = document.querySelectorAll('.dotCircle');
        let width = container[0].clientWidth;
        let height = container[0].clientHeight;
        let angle = 0;
        let  step = (2 * Math.PI) / fields.length;
        radius = width / 2.5;

        fields.forEach((e,i)=>{
            let x = Math.round(width / 2 + radius * Math.cos(angle) - e.clientWidth / 2);
            let y = Math.round(height / 2 + radius * Math.sin(angle) - e.clientHeight / 2);

            e.style.left = x + 'px';
            e.style.top = y + 'px';
            angle += step;
        })        

        setInterval(function () {
            let itemDot = document.querySelectorAll('.itemDot');  
            console.log(itemDot);
            let dataTab = document.querySelectorAll('.itemDot.active')[0].getAttribute('data-tab');
            // console.log(dataTab);
            if (dataTab > 6 || i > 6) {
                dataTab = 1;
                i = 1;
            }
            // $(".itemDot").removeClass("active");
            // $('[data-tab="' + i + '"]').addClass("active");
            // $(".CirItem").removeClass("active");
            // $(".CirItem" + i).addClass("active");
            // i++;

            // $(".dotCircle").css({
            //     transform: "rotate(" + (360 - (i - 2) * 36) + "deg)",
            //     transition: "2s",
            // });
            // $(".itemDot").css({
            //     transform: "rotate(" + (i - 2) * 36 + "deg)",
            //     transition: "1s",
            // });
        }, 5000);
    }, []);

    return(
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
    )
}

export default HolderCircle;