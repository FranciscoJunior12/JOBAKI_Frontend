import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ProposalSentCard from "../components/cards/ProposalSent/ProposalSentCard";
import LeftSidebar from "../components/shared/Leftsidebar/LeftSidebar";
import "../components/styles/Grid.css";



const ProposalsSent = () => {

  const [proposal, setProposal] = useState([]);
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  const getProposal = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    console.log(data)
    setProposal(data);

  }

  useEffect(() => {
    const url = `https://jobaki-rest-api.vercel.app/api/jobaki/proposal`;
    getProposal(url);

  }, []);


  return (
    <>
      <NavBar />
      <LeftSidebar />
      <div className="container">
        <div className="movies-container">
          {proposal.length === 0 && <p>Caregando...</p>}
          {proposal.length > 0 && proposal.map((proposal) =>


            proposal.freelancerID === currentUser._id ? (< ProposalSentCard proposal={proposal} />) : ""
          )
          }
        </div>
      </div>
    </>
  );
};

export default ProposalsSent;
