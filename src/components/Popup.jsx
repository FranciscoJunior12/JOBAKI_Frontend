import Modal from 'react-modal';
import React from 'react'
import './styles/Popup.css'
import { useState } from 'react';
import { useContext } from 'react';
import { DataContext } from '../context/GlobalData';
import { useEffect } from 'react';


const Popup = ({ info }) => {



    const { open, setOpen } = useContext(DataContext);



    useEffect(() => {



    }, [open]);




    return (


        <>

            {/* <div class="teste">
                    <button type="submit" class="btn" onclick="openPopup()">Submeter</button>
                </div> */}

            <div className={`popup ${open === true ? "open-popup" : ""}`} id="popup">

                <img src="404-tick.png " />
                <h2>Confirmação!</h2>
                <p>{info}</p>
                <button type="submit" onClick={() => { setOpen(false) }}>OK</button>

            </div>


        </>
    )
}

export default Popup