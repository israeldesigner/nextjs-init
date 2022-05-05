const HolderCircle: React.FunctionComponent = () =>{

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