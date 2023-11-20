import "./proposal.css";

const ProposalSentCard = ({ proposal }) => {
  return (
    <div className="proposal-card project-card">
      <div className="proposal-card_header">
        <img src="/1.jpg" alt="" />
        <p>{proposal.nome_empresa}</p>
      </div>

      <div className="project-details">
        <h2>{proposal.titulo_projecto}</h2>
        <p>
          {proposal.descricao}
        </p>
      </div>

      <div className="proposal-status">
        <span>Status:</span> {" "}
        <span className=
          {`pendente ${proposal.estado_de_aceitacao === "A" ? "aceite" : (proposal.estado_de_aceitacao === "R" ? "recusada" : "")}`}
        >
          {proposal.estado_de_aceitacao === "A" ? "Aceite" : (proposal.estado_de_aceitacao === "R" ? "Recusada" : "Pendente")}
        </span>
      </div>
    </div>
  );
};

export default ProposalSentCard;
