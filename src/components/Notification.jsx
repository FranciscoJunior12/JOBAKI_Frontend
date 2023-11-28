import React, { useEffect, useState } from 'react'
import NavBar from './NavBar';
import LeftSidebar from './shared/Leftsidebar/LeftSidebar';
import NotificationCard from './cards/Notification/NotificationCard';
import Popup from './Popup';
import { useContext } from 'react';
import { DataContext } from '../context/GlobalData';

const Notification = () => {

    const { open, setOpen, close, setClose } = useContext(DataContext);
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    const [proposal, setProposal] = useState([]);
    const getProject = async (url) => {
        const res = await fetch(url);
        const data = await res.json();



        setProposal(data);


    }

    useEffect(() => {
        const url = `https://jobaki-rest-api.vercel.app/api/jobaki/proposal`;
        getProject(url);

    }, []);


    return (
        <>

            <NavBar />
            <LeftSidebar />
            <div className='container'>
                <div className='movies-container'>


                    {proposal.length === 0 && <p>Caregando...</p>}
                    {proposal.length > 0 && proposal.map((proposal) => {
                        if (currentUser._id === proposal.empresaID && !proposal.confirmado) {
                            return <NotificationCard key={proposal._id} proposal={proposal} />;
                        } else {
                            return null;
                        }
                    })}

                </div>
            </div>

            <Popup info="Proposta Aceita Com sucesso."/>

        </>

    )
}

export default Notification;