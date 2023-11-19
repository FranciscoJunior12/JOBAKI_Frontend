import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import '../../cards/Project/styles.css'
import '../../styles/Grid.css'
import './proposal.css';

const ProposalForm = ({title}) => {
    const {state} = useLocation();

    return (
        <div className='container'>
            <div className='movies-container'>
                <div className="project-card">

                    <div className="Flex">
                        <h2>Web Project: {state.disponibilidade}</h2>
                    </div>

                    <form className='proposal-form'>
                        <div>
                            <label htmlFor="">Tecnologias</label>
                            <input type="text" placeholder='Next.js React.js MongoDB Zustand NextAuth' />
                        </div>

                        <div>
                            <label htmlFor="">Proposta de Pagamento</label>
                            <input type="text" placeholder='500.000 MT' />
                        </div>

                        <div>
                            <label htmlFor="">Disponibilidade Requerida</label>
                            <input type="text" placeholder='Full-time' />
                        </div>

                        <div>
                            <label htmlFor="">Anos de Experiência:</label>
                            <input type="text" placeholder='2 years' />
                        </div>

                        <div className='button'><button type='submit'>Fazer Proposta</button></div>
                    </form>

                </div >
            </div>
        </div>
    )
}

export default ProposalForm