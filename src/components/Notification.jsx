import React, { useEffect, useState } from 'react'
import NavBar from './NavBar';
import LeftSidebar from './shared/Leftsidebar/LeftSidebar';
import NotificationCard from './cards/Notification/NotificationCard';

const Notification = () => {


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
                    {proposal.length > 0 && proposal.map((proposal) =>

                        currentUser._id === proposal.empresaID ?
                            (<NotificationCard proposal={proposal} />) : "")

                    }

                </div>
            </div>

        </>

    )
}

export default Notification;