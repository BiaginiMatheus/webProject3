import React, { useState } from 'react';
//import './Login.css';
//import logo from '../assets/logo.svg'
import api from '../services/apiBack'

export default function Login({ history }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [question, setQuestion] = useState('');
    const [questions, setQuestions] = useState([]);

    const idUser = String;

    async function listarQuestions() {
        const response = await api.get('/listQuestions', {
            idUser
        });
        setQuestions(response.data);
    }
    async function send(e) {
        e.preventDefault();
        const response = await api.post('/findId', {
            user: username,
            password
        });
        const { _id } = response.data;
        idUser = _id
        api.post('/newQuestion', {
            idUser: _id,
            question
        });
        alert('Tudo certo');
        history.push('/');
    }
    return (
        <div className="Login">
            <body>
                <div class="container">
                    <form onSubmit={send}>
                        <label for="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" value={username} onChange={e => setUsername(e.target.value)}></input>

                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)}></input>
                        <label for="Question"><b>Question</b></label>
                        <input type="text" placeholder="Enter your Question" value={question} onChange={e => setQuestion(e.target.value)}></input>
                        <button type="submit">Login</button>
                        <button type="button" onClick={listarQuestions}>Listar Perguntas</button>
                    </form>
                    <ul>
                        {questions.map(q => (
                            <li>{q}</li>
                        ))}
                    </ul>
                </div>
            </body>
        </div >);
}
/*function periodicRefresh(requiredInfo) {

    var myInterval = setInterval(function () {

        $.ajax({
            url: '/system/myServerScript.php',
            type: 'POST',
            dataType: 'json',
            data: { ri: requiredInfo },
            success: function (response) {

                if (response.success == true) {
                    // UPDATE THE CONTENT WITH THE NEW INFORMATION
                    var freshData = response.data;
                    $('#oldData').replaceWith(freshData);
                    // ONCE THE NEW DATA HAS BEEN OBTAINED, END setInterval
                    clearInterval(myInterval);
                }

            }
        });
        // REPEATS EVERY 5 SECONDS UNTIL clearInterval IS CALLED
    }, 5000);
}*/
//