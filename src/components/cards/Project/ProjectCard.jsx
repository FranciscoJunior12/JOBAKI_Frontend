import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./styles.css"

const ProjectCard = ({ projecto }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        localStorage.setItem("projecto", projecto);

        navigate(`/proposta/${projecto._id}`, { state: projecto });
    }

    return (
        <div className="project-card">
            <div className="project-card-header">
                <img src="/1.jpg" alt="" />


                <p><span>{projecto.nome_empresa}</span></p>


            </div>


            <div className="Flex">
                <h2>{projecto.titulo}</h2>
                <button className="btn-proposta" onClick={() => { handleClick() }}>
                    Fazer Proposta
                </button>
            </div>

            <p>{projecto.descricao}</p>


            <p><span>Disponibilidade requerida:</span> Meio período</p>
            <p><span>Anos de Experiencia:</span> {projecto.anos_experiencia}</p>
            <p><span>Habilidades requerida:</span> {projecto.tecnologias}</p>
            <p><span>Proposta de Pagamento:</span> {projecto.proposta_pagamento}</p>
            <p><span>Duração:</span> {projecto.duracao}</p>

        </div >
    )
}

export default ProjectCard;