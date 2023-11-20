import React from 'react'
import NavBar from '../components/NavBar'
import LeftSidebar from '../components/shared/Leftsidebar/LeftSidebar'
import ProposalForm from '../components/forms/Proposal/ProposalForm'

const Proposal = () => {

    return (
        <>
            <NavBar />
            <LeftSidebar />
            <ProposalForm />
        </>

    )
}

export default Proposal