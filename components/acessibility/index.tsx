

const acessibility: React.FunctionComponent = (props) =>{
    return(
        <section className="s-acessibility d-none d-lg-block bg-light">
            <div className="app-acessibilidade">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12 app-acessibilidadeMenu d-none d-md-flex align-items-center">
                            <a className="scroll mr-1" href="#anchorCom" data-toggle="tooltip" data-placement="top" title="atalho alt + 1" data-original-title="alt + 1" accessKey='1'> Conteúdo Central |</a>
                            <a className="scroll mr-1" href="#contHeader" data-toggle="tooltip" data-placement="top" title="atalho alt + 2" data-original-title="alt + 2" accessKey='2'> Menu |</a>
                            <a className="scroll mr-1" href="#footer" data-toggle="tooltip" data-placement="top" title="atalho alt + 3" data-original-title="alt + 3" accessKey='3'> Rodapé </a>
                            <a href="./acessibilidade" className="mr-1" data-toggle="tooltip"><i className="fa d-inline fa-wheelchair text-gray-700"></i></a> 
                            <a href="#altocontraste" id="altocontraste" className="colorContrast mr-1 text-gray-700">
                            <i className="fa d-inline fa-adjust text-blue text-gray-700"></i></a>
                            <a href="#" className="sizeMenos mr-1 text-gray-700" data-toggle="tooltip">A-</a>
                            <a href="#" className="sizePadrao mr-1 text-gray-700" data-toggle="tooltip">A</a>
                            <a href="#" className="sizeMais mr-1 text-gray-700" data-toggle="tooltip">A+</a>
                            <div className="py-2 flex justify-items-end langButton">
                                <button className="lang-button" type="button">
                                    <img src="img/br.svg" width="25" alt="br" className="" />
                                </button>
                                <button className="lang-button" type="button">
                                    <img src="img/gb.svg" width="25" alt="ing" className="" />
                                </button>
                                <button className="lang-button" type="button">
                                    <img src="img/es.svg" width="25" alt="es" className="" />
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 app-acessibilidadeItens d-none d-md-block">
                            <ul className="menu mb-0">
                            <li className="nav-item">
                                <a href="https://acessoainformacao.fortaleza.ce.gov.br/" data-toggle="tooltip" className="nav-link px-1 text-gray-700" target="_blank" rel="noopener noreferrer">Acesso a informação</a>
                            </li>
                            <li className="nav-item">
                                <a href="https://transparencia.fortaleza.ce.gov.br/" data-toggle="tooltip" className="nav-link px-1 text-gray-700" target="_blank" rel="noopener noreferrer">Transparência</a>
                            </li>
                            <li className="nav-item">
                                <a href="https://catalogodeservicos.fortaleza.ce.gov.br/" data-toggle="tooltip" className="nav-link px-1 text-gray-700" target="_blank" rel="noopener noreferrer">Serviços</a>
                            </li>
                            <li className="nav-item">
                                <a href="http://legislacao.fortaleza.ce.gov.br/index.php/P%C3%A1gina_principal" data-toggle="tooltip" className="nav-link px-1 text-gray-700" target="_blank" rel="noopener noreferrer">Legislação</a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default acessibility;