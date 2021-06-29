import React, { Component, Fragment} from 'react';
import './Main.css';

export default class Main extends Component{
    handleClickSite = () => {
        window.location.assign('https://fiomodaintima.com.br/');
    }

    handleClickWhatsApp = () => {        
        window.location.assign('https://bit.ly/2UvPkz1');
    }

    render(){
        return (
            <Fragment>
                <div className="principal">
                    <div className="logoModa" alt="logo" />
                    <h1 className="titulo">Atendimento Online</h1>
                    <h1 className="subtitulo">Escolha a sua melhor forma para comprar:</h1>  
                    <div className="btn-grupo">          
                        <button href="#" className="botao" onClick={this.handleClickSite}>Site</button><br/>
                        <button className="botao" onClick={this.handleClickWhatsApp}>Whatsapp</button>
                    </div>
                </div>    
            </Fragment>            
        );
    }    
};
