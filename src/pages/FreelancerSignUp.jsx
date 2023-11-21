import { useState } from "react";
import "../components/styles/FreelancerSignUp.css";

const FreelancerSignUp = () => {
  const [imagem, setImagem] = useState(null);

  const handleChangeImage = (event) => {
    const arquivo = event.target.files[0];

    setImagem(arquivo);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // uploads de arquivos
    const formData = new FormData();

    //Para adicionar
    formData.append("imagem", imagem);
    formData.append("Name", "Lenny");
  };

  return (
    <div className="freelancer-signup-container">
      <div className="freelancer-form-container">
        <nav>
          <h1>JOBAKI</h1>
        </nav>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Foto de Perfil</label>
            <input className='file' type="file" onChange={handleChangeImage} />
          </div>

          <div>
            <label htmlFor="">Área de actuação</label>
            <input type="text" placeholder="Área de actuação" />
          </div>

          <div>
            <label htmlFor="">Sobre</label>
            <textarea placeholder="Sobre"></textarea>
          </div>

          <div>
            <label htmlFor="">Tecnologias</label>
            <input type="text" placeholder="Tecnologias" />
          </div>

          <div>
            <label htmlFor="">Experiência</label>
            <textarea placeholder="Experiência"></textarea>
          </div>

          <div>
            <label htmlFor="">Anos de Experiência</label>
            <input type="text" placeholder="Anos de Experiência" />
          </div>

          <div>
            <label htmlFor="">Provincia</label>
            <select>
              <option value="" >Seleccione:</option>
              <option value="maputoCidade">Maputo Cidade</option>
              <option value="maputoprovincia">Maputo Provincia</option>
              <option value="gaza">Gaza</option>
              <option value="inhambane">Inhambane</option>
              <option value="manica">Manica</option>
              <option value="sofala">Sofala</option>
              <option value="tete">Tete</option>
              <option value="zambezia">Zambezia</option>
              <option value="nampula">Nampula</option>
              <option value="niassa">Niassa</option>
              <option value="caboDelgado">Cabo Delgado</option>
            </select>

          </div>

          <div>
            <label>Linkedin</label>
            <input type="text" placeholder="LinkedIn" />
          </div>

          <div>
            <label>Github</label>
            <input type="text" placeholder="Github" />
          </div>

          <div>
            <label>Portfolio</label>
            <input type="text" placeholder="Portfolio" />
          </div>

          <div>
            <label>Instagram</label>
            <input type="text" placeholder="Instagram" />
          </div>

          <div className="form-button">
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
      <div className="freelancer-signup-image">
        <div class="rightSide">
          <h2>JOBAKI.</h2>
          <h2>Liberte.</h2>
          <h2>Seu Talento.</h2>
        </div>
      </div>
    </div>
  );
};

export default FreelancerSignUp;
