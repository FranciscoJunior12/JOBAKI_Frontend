import { useState } from "react";
import "../components/styles/FreelancerSignUp.css";

const ClientSignUp = () => {
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
            <input type="file" onChange={handleChangeImage} />
          </div>

          <div>
            <label htmlFor="">Nome da Empresa</label>
            <input type="text" placeholder="Nome da Empresa"/>
          </div>

          <div>
            <label htmlFor="">Sobre a Empresa</label>
            <textarea placeholder="Sobre a Empresa"></textarea>
          </div>

          <div>
            <label htmlFor="">Site da Empresa</label>
            <input type="text" placeholder="Site da Empresa"/>
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
            <label>Endereço</label>
            <input type="text" placeholder="Endereço"/>
          </div>

          <div>
            <label>Email da Empresa</label>
            <input type="text" placeholder="Email da Empresa"/>
          </div>

          <div>
            <label>Senha</label>
            <input type="text" placeholder="Senha" />
          </div>

          <div className="form-button">
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
      <div className="freelancer-signup-image">
        <div class="rightSide">
          <h2>JOBAKI.</h2>
          <h2>Encontre.</h2>
          <h2>Melhores Freelancers.</h2>
        </div>
      </div>
    </div>
  );
};

export default ClientSignUp;