

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../components/styles/login.css'

const Login = () => {


    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const [responseData, setResponseData] = useState(null);


    const handleLogin = async () => {

        if (!email || !password) return

        const url = 'http://localhost:3000/users/login';
        const dados = {
            email: email,
            password: password,

        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify(dados),
            });

            if (response.status === 500) {
                return console.log(" erro interno no servidor")
            }
            if (response.status === 400) {
                setError(true);
                cleanFields();
            }

            if (response.status === 200) {

                setError(false)
                const user = await response.json();
                setResponseData(user);
                localStorage.setItem('currentUser', JSON.stringify(user));

                if (user.perfil === "user") {
                    return navigate("/home")
                }
                return navigate("/perfil")

            }



        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    };


    const cleanFields = () => {

        setEmail("");
        setPassword("");


    }



    return (

        <div className="containeer">
            <div className="container-login">
                <div className="welcome-text">

                    <h1 style={{ display: 'inline', textAlign: 'center' }}> JOBAKI</h1>

                </div>

                <div id="div-buttom">
                    <ul>
                        <li className="buttom">
                            <a href="#">
                                <img src="google.png" />
                                <p>Login com google</p>
                            </a>
                        </li>
                        <li className="buttom">
                            <a href="#">
                                <img style={{ width: '3%' }} src="facebook.png" />
                                <p>Login com facebook</p>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="flex0">

                    <div className="row">
                        <hr />
                    </div>

                    <div>
                        <p>OR</p>
                    </div>

                    <div className="row">
                        <hr />
                    </div>

                </div>


                <div className="div-form">

                    <form>


                        <label className="flex1">
                            <img style={{ width: '5%' }} src="email.png" />
                            <label className="flex2">
                                <p>Email</p>
                                <input className="text-input" placeholder="example@gmail.com" id="email" />
                            </label>
                        </label>

                        <label className="flex1 space">
                            <label className="flex1 pad">
                                <img style={{ width: '8%' }} src="key.png" />
                                <label className="flex2">
                                    <p>Senha</p>
                                    <input className="text-input" type="password" placeholder="*********" id="senha" />
                                </label>


                            </label>
                            <img style={{ width: '5%' }} src="eyes.png" />
                        </label>



                        <label className="div">
                            <label id="save-passoword">
                                {/* <!-- <img style="width: 5%;" src="check.png" alt=""> --> */}
                                <input type="checkbox" id="check" />
                                <label htmlFor="check">Lembrar-me</label>
                            </label>

                            <div><a href="#">esqueci palavra-passe</a></div>
                        </label>

                        <label className="buttom btn-login">
                            <input type="submit" value="Login" id="btn-login" />
                        </label>



                        <p style={{ fontSize: '12px', textAlign: 'center' }}>
                            Não tem uma conta? <a href="#">Registrar-se</a>
                        </p>

                    </form>


                </div>





            </div>




        </div >


    )
}

export default Login;