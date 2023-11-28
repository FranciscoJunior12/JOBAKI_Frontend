import { useState } from "react";
import "./projectform.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../../context/GlobalData";
import Popup from "../../Popup";

const ProjectForm = () => {

  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  const { open, setOpen, close, setClose } = useContext(DataContext);


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


        setOpen(true)
        // alert("Projecto publicado com sucesso!")


        // return navegate("/home")

      }

    } catch (error) {
      console.error('Erro na requisição:', error);
    }

  }


  return (
    <>

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
                  placeholder="@exemplo: Landing Page"
                  value={title}
                  onChange={(e) => { setTitle(e.target.value) }} />
              </div>
              <div>
                <label htmlFor="">Descrição do Projecto:</label>
                <textarea className="textarea"
                placeholder="Estamos à procura de um designer e desenvolvedor web talentoso para criar uma landing page impactante para o lançamento do nosso produto mais recente..."
                  value={description}
                  onChange={(e) => { setDescription(e.target.value) }}
                ></textarea>
              </div>
              <div>
                <label htmlFor="">Tecnologias</label>
                <input type="text"
                  placeholder="@exemplo: Java, HTML, CSS,javaScript, PHP..."
                  value={tecnologia}
                  onChange={(e) => { setTecnologia(e.target.value) }}
                />
              </div>
              <div>
                <label htmlFor="">Proposta de Pagamento</label>
                <input type="text"
                  placeholder="@exemplo: 40.000,00mt-50.000,00mt"
                  value={proposta}
                  onChange={(e) => { setProposta(e.target.value) }}

                />
              </div>
              <div>
                <label htmlFor="">Disponibilidade Requerida</label>
                <input type="text"
                  placeholder="@exemplo: Tempo inteiro ou tempo parcial"
                  value={disponibilidade}
                  onChange={(e) => { setDisponibilidade(e.target.value) }}
                />
              </div>
              <div>
                <label htmlFor="">Anos Experiência</label>
                <input type="text"
                  placeholder="@exemplo: 2anos"
                  value={anosExperiencia}
                  onChange={(e) => { setAnosExperiencia(e.target.value) }}
                />
              </div>
              <div>
                <label htmlFor="">Duração do Projecto:</label>
                <input type="text"
                  placeholder="@exemplo: 2 meses"
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
        <Popup info="Projecto Publicado Com Sucesso" />
      </div>
    </>
  );
};

export default ProjectForm;
