import React from 'react'
import '../components/styles/welcome.css'
import { Link } from 'react-router-dom'

const Welcome = () => {
    return (


        <>
            <section id="main-section">



                <header>

                    <div id="logo">
                        <h1>JOBAKI</h1>
                    </div>

                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <Link to="/login" id="btn-login">Login</Link>
                        <label htmlFor="check">&#9776;</label>
                    </div>
                    <input type="checkbox" name="check" id="check" />



                    <ul id="menu-list">
                        <li>
                            <a href="#">Cadastre-se como frelancer</a>
                        </li>
                        <li>
                            <a href="#">Contratar frelancer</a>
                        </li>
                    </ul>

                </header>

                <main>

                    <div class="containeeer">


                        <div id="texto">
                            <h2> <span>Bem-vindo</span> à Nova Era do Trabalho</h2>

                            <h4>
                                Conectamos os melhores talentos independentes com as melhores empresas
                            </h4>

                            <div id="buttons">
                                <a href="#" class="butt" id="btn-cadastrar-freelancer">Cadastre-se como freelancer</a>
                                <a href="#" class="butt btn" id="btn-contratar-freelancer">Contratar freelancer</a>
                            </div>
                        </div>


                        <div id="div-img">
                            <img src="frelancer.jpg" />
                        </div>

                    </div>


                </main>

                <div class="underMain">
                    <div class="container2">
                        <p id="paragrafoDev"><span>Precisa de Desenvolvedores?</span> Nós encontramos para você.</p>
                        <p id="paragrafo">Seleccione, contrate e pague desenvolvedores pré-seleccionados e certificados da
                            comunidade de desenvolvedores líder na América Latina, em até 10 dias. Remotos, tempo integral e
                            longo prazo (apenas para projectos com duração superior a 6 meses).</p>
                        <div><a href="" class="botaoSaibaMais">Saiba mais</a></div>
                    </div>

                    <div>
                        <img src="https://static.portaldaindustria.com.br/portaldaindustria/noticias/media/imagem_plugin/profissionalti.jpg" alt="Programmer" id="img2" />
                        <div class="cor"></div>
                    </div>
                </div>

                <footer class="footer">
                    <div>
                        <h1>JOBAKI</h1>
                        <p>&#169; 2023 | JOBAKI </p>
                    </div>

                    <div class="socials">
                        <p>Redes Sociais:</p>
                        <a href=""><img src="facebook2.png" alt="" /></a>
                        <a href=""><img src="twitter.png" alt="" /></a>
                        <a href=""><img src="linkedin.png" alt="" /></a>
                        <a href=""><img src="instagram.png" alt="" /></a>
                    </div>

                </footer>



            </section>

        </>
    )
}

export default Welcome