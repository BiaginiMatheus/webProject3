import React, { useState } from 'react';
import './Main.css';
import logo from '../assets/logo.svg'

export default function Main({ history }) {

    const [message, setMessage] = useState('');

    function nextPage() {
        history.push(`/Login`)
    }
    return (
        <div className="Main">
            <body>
                <div className="LeftBar">
                    <div className="Logo">
                        <img src={logo} alt="UTFaq" className="UtfaqLogo" />
                    </div>
                    <div className="mainQuestions">
                        <p>Principais Duvidas</p>
                    </div>
                    <div className="Questions">

                    </div>
                </div>
                <div className="MainArea">
                    <div className="headPage">
                        <div className="Intro">
                            <p className="IntroTxt">Tire aqui sua dúvida!!</p>
                        </div>
                        <div className="RestrictedArea">
                            <button className="RestArea" type="button" onClick={nextPage}>Área Restrita</button>
                        </div>
                    </div>
                    <div className="Chat">

                    </div>
                    <div className="Send">
                        <div className="Conversation">
                            <input className="newMsg"
                                placeholder="Digite sua dúvida"
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                            />
                            <button className="sendBtn" type="submit">Enviar</button>
                        </div>
                    </div>
                </div>
            </body>
        </div >);
}

//