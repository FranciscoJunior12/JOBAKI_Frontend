import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import '../../cards/Project/styles.css'
import '../../styles/Grid.css'
import './proposal.css';

const ProposalForm = ({ title }) => {

    const { state } = useLocation();
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    const [tecnologia, setTecnologia] = useState('');
    const [pagamento, setPagamento] = useState('');
    const [disponibilidade, setDisponibilidade] = useState('');
    const [anosExperiencia, setAnosExperiencia] = useState('');



    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!tecnologia || !pagamento || !disponibilidade || !anosExperiencia) return alert("todos os campos devem ser ")

        const url = `https://jobaki-rest-api.vercel.app/api/jobaki/proposal`

        const dados = {

            freelancerID: currentUser._id,
            projectoID: state._id,
            empresaID: state.companyId,
            estado_de_aceitacao: "P",
            status: true,
            titulo_projecto: state.titulo,
            tecnologias: tecnologia,
            proposta_pagamento: pagamento,
            disponibilidade: disponibilidade,
            anos_experiencia: anosExperiencia,
            nome_freelancer: "Francisco Manuel",
            nome_empresa: state.nome_empresa,
        }
        try {

            console.log(dados)

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },

                body: JSON.stringify(dados),

            });

            if (response.status == 201) {

                alert("Projecto publicado com sucesso!")
                return navegate("/home")

            }

        } catch (error) {
            console.error('Erro na requisição:', error);
        }



    }




    return (
        <div className='container'>
            <div className='movies-container'>
                <div className="project-card">

                    <div className="Flex">
                        <h2>{state.titulo}</h2>
                    </div>

                    <form className='proposal-form' onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="">Tecnologias</label>
                            <input type="text" placeholder='Next.js React.js MongoDB Zustand NextAuth'

                                value={tecnologia}
                                onChange={(e) => { setTecnologia(e.target.value) }}

                            />
                        </div>

                        <div>
                            <label htmlFor="">Proposta de Pagamento</label>
                            <input type="text" placeholder='500.000 MT'
                                value={pagamento}
                                onChange={(e) => { setPagamento(e.target.value) }}
                            />
                        </div>

                        <div>
                            <label htmlFor="">Disponibilidade Requerida</label>
                            <input type="text" placeholder='Full-time'

                                value={disponibilidade}
                                onChange={(e) => { setDisponibilidade(e.target.value) }}
                            />
                        </div>

                        <div>
                            <label htmlFor="">Anos de Experiência:</label>
                            <input type="text" placeholder='2 years'

                                value={anosExperiencia}
                                onChange={(e) => { setAnosExperiencia(e.target.value) }}
                            />
                        </div>

                        <div className='button'><button type='submit'>Fazer Proposta</button></div>
                    </form>

                </div >
            </div>
        </div>
    )
}

export default ProposalForm