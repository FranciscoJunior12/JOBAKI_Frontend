import React from 'react'
import './notification.css'
import { useNavigate } from 'react-router-dom'



const NotificationCard = ({ proposal }) => {

    const navegate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();



        const url = `https://jobaki-rest-api.vercel.app/api/jobaki/proposal/${proposal._id}`

        const dados = {
            confirmado: true,
            estado_de_aceitacao: "A",

        }

        const dados1 = {
            confirmado: true,
            estado_de_aceitacao: "R",

        }
        try {

            console.log(url)

            if (e.target.classList.value === 'btn-aceitar') {

                const response = await fetch(url, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',

                    },
                    body: JSON.stringify(dados),

                });



                if (response.status == 200) {

                    alert("Proposta Aceite com sucesso!")
                    navegate('/notificacao')


                }

            } else {

                const response = await fetch(url, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',

                    },
                    body: JSON.stringify(dados1),

                });

                if (response.status == 200) {

                    alert("Proposta recusada com sucesso!")

                }
            }





        } catch (error) {
            console.error('Erro na requisição:', error);
        }



    }




    return (
        <div className='project-card'>
            <div className="proposal-card_header">
                <img src="/1.jpg" alt="" />
                <p> {proposal.nome_freelancer}</p>
            </div>

            <div className="project-details">
                <h2> {proposal.titulo_projecto}</h2>
                <p><span>Disponibilidade requerida:</span> {proposal.disponibilidade}</p>
                <p><span>Anos de Experiencia:</span>  {proposal.anos_experiencia}</p>
                <p><span>Habilidades requerida:</span> {proposal.tecnologias}</p>
                <p><span>Proposta de Pagamento:</span>{proposal.proposta_pagamento}</p>

            </div>

            <div className="botoes">
                <button type="submit" className='btn-aceitar' onClick={handleSubmit}>Aceitar</button>
                <button type='submit' className='btn-recusar' onClick={handleSubmit}>Recusar</button>
            </div>

        </div>
    )
}

export default NotificationCard;