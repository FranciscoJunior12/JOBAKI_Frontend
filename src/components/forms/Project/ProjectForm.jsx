import { useState } from "react";
import "./projectform.css";
import { useNavigate } from "react-router-dom";

const ProjectForm = () => {

  const currentUser = JSON.parse(localStorage.getItem('currentUser'));


  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tecnologia, setTecnologia] = useState('');
  const [proposta, setProposta] = useState('');
  const [anosExperiencia, setAnosExperiencia] = useState('');
  const [disponibilidade, setDisponibilidade] = useState('');
  const [duracao, setDuracao] = useState('');



  const handleSubmit = async (e) => {


    e.preventDefault();

    if (!proposta || !description || !disponibilidade || !anosExperiencia) return alert("todos os campos devem ser ")

    const url = `https://jobaki-rest-api.vercel.app/api/jobaki/post`

    const dados = {
      companyId: currentUser._id,
      nome_empresa: currentUser.nome_empresa,
      titulo: title,
      descricao: description,
      tecnologias: tecnologia,
      proposta_pagamento: proposta,
      disponibilidade: disponibilidade,
      anos_experiencia: anosExperiencia,
      duracao: duracao,


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

        // return navegate("/home")

      }

    } catch (error) {
      console.error('Erro na requisição:', error);
    }

  }


  return (
    <div className="container">
      <div className="movies-container">
        <div className="project-card">
          <div className="Flex">
            <h2>Publicar Projecto</h2>
          </div>
          <form className="project-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="">Título do Projecto:</label>
              <input type="text"

                value={title}
                onChange={(e) => { setTitle(e.target.value) }} />
            </div>
            <div>
              <label htmlFor="">Descrição do Projecto:</label>
              <textarea
                value={description}
                onChange={(e) => { setDescription(e.target.value) }}
              ></textarea>
            </div>
            <div>
              <label htmlFor="">Tecnologias</label>
              <input type="text"

                value={tecnologia}
                onChange={(e) => { setTecnologia(e.target.value) }}
              />
            </div>
            <div>
              <label htmlFor="">Proposta de Pagamento</label>
              <input type="text"

                value={proposta}
                onChange={(e) => { setProposta(e.target.value) }}

              />
            </div>
            <div>
              <label htmlFor="">Disponibilidade Requerida</label>
              <input type="text"

                value={disponibilidade}
                onChange={(e) => { setDisponibilidade(e.target.value) }}
              />
            </div>
            <div>
              <label htmlFor="">Anos Experiência</label>
              <input type="text"

                value={anosExperiencia}
                onChange={(e) => { setAnosExperiencia(e.target.value) }}
              />
            </div>
            <div>
              <label htmlFor="">Duração do Projecto:</label>
              <input type="text"

                value={duracao}
                onChange={(e) => { setDuracao(e.target.value) }}
              />
            </div>
            <div className="button">
              <button type="submit">Publicar Projecto</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProjectForm;
