import NavBar from "../components/NavBar";
import LeftSidebar from "../components/shared/Leftsidebar/LeftSidebar";
import '../components/styles/Grid.css'
import "../components/forms/Project/projectform.css";

const Suporte = () => {
  return (
    <>
      <NavBar />
      <LeftSidebar />
      <div className="container">
        <div className="movies-container">
          <div className="project-card">
            <h2 id="h3">Suporte Tecnico</h2>
            <form action="" className="project-form">
              <div className="flex7">
                <input type="text" name="" id="" placeholder="Nome" />
                <input type="text" placeholder="Email" />
              </div>
              <input type="text" placeholder="Assunto" />
              <textarea name="" id="textare" cols="0" rows="10" placeholder="Mensagem"></textarea>
              <div className="button">
                <button type="submit" className="">Enviar Mensagem</button>
              </div>
            </form>


          </div>


        </div>
      </div>
    </>
  );
};

export default Suporte;
