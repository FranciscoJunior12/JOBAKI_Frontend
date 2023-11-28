import { Link } from "react-router-dom";
import "../components/styles/UserSelection.css";

const UserSelection = () => {
  return (
    <div className="user-selection">
      <header>
        <div id="logo" class="Container">
          <h1>JOBAKI</h1>
        </div>
      </header>
      <main>
        <h2 class="h2">Como podemos te ajudar ?</h2>
        <div class="profiles">
          <div class="Flex">
            <img src="/frelancer2.jpg" />
            <Link to="/freelancer/signup" class="button" id="btn-cadastrar-freelancer">
              {" "}
              Cadastrar como Freelancer
            </Link>
          </div>

          <div class="Flex">
            <img src="https://wkncdn.com/newx/assets/build/img/talent-onboard/talent.e6726c426.png" />
            <Link to="/client/signup" class="button" id="btn-contratar-freelancer">
              {" "}
              Cadastrar como Contratante
            </Link>
          </div>
        </div>

        <div class="rightSide">
          <h2>
            Junte-se à nova era <br /> do trabalho{" "}
          </h2>
        </div>

        <p>
          Já tem uma conta? <Link to="/login">Entrar</Link>
        </p>
      </main>
    </div>
  );
};

export default UserSelection;
