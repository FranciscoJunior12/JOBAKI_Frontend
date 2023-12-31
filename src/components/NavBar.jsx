import { Link, useNavigate } from 'react-router-dom';
import { BiSearchAlt2, BiLogOut } from "react-icons/bi";
import { IoRestaurantOutline } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineInsertComment } from "react-icons/md";
import './styles/Navbar.css';

import { IoSettingsOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";

import { IoIosLogOut } from "react-icons/io";
import { useState, useContext } from 'react';
import { DataContext } from '../context/GlobalData';


const NavBar = () => {

    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    const { filter, setFilter } = useContext(DataContext);
    const [dropMenu, setDropMenu] = useState(false);

    const [search, setSearch] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();
        if (!search) return;

       // console.log(filter)

        navigate(`/search?q=${search}`);
        setSearch("");
    }

    return (
        <nav id="navbar">
            <h2>
                <Link to="/home">
                    JOBAKI
                </Link>
            </h2>

            <form onSubmit={handleSubmit}>
                <select value={filter} onChange={(e) => {
                    setFilter(e.target.value)
                }} >
                    <option>Filter by</option>
                    <option value="Minhas Habilidades" >Minhas Habilidades</option>
                    <option value="Título do Projecto" >Título do Projecto</option>
                    <option value="Data" >Data de Publicação</option>
                    <option value="Categoria" >Categoria</option>
                </select>

                <div className='form-search'>
                    <input type="text" placeholder='Busque um projecto...'
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                    />
                    <button type='submit'><BiSearchAlt2 /></button>
                </div>

            </form>

            <div className='profile'>
                <div >
                    <span>
                        <Link to="/notificacao">
                            <IoNotificationsOutline />
                        </Link>
                    </span>
                    <span>
                        <Link to="/chat">
                            <MdOutlineInsertComment />
                        </Link>
                    </span>
                </div>

                <span className='perfil' onClick={() => setDropMenu((current) => !current)}>
                    <Link to="#" className='user-profile'>
                        <BsPersonCircle />
                        <p> {currentUser.perfil === "Freelancer" ? currentUser.nome : currentUser.nome_empresa}</p>
                    </Link>
                    {
                        dropMenu && (
                            <div className='profile-content'>
                                <div className='dropdown-header'>
                                    <h6> {currentUser.perfil === "Freelancer" ? currentUser.nome : currentUser.nome_empresa}
                                    </h6>
                                    <p> {currentUser.perfil === "Freelancer" ? currentUser.area_actuacao : ""}</p>
                                </div>
                                <ul>

                                    <li>
                                        <CiUser /> <Link to="#">Meu perfil</Link>
                                    </li>

                                    <li>
                                        <IoSettingsOutline /> <Link to="#">Definições de conta</Link>
                                    </li>

                                    <li>
                                        <IoIosHelpCircleOutline />  <Link to="#">Ajuda</Link>

                                    </li>

                                    <li>
                                        <IoIosLogOut /> <Link to="/">Sair</Link>
                                    </li>
                                </ul>
                            </div>
                        )
                    }
                </span>
            </div>
        </nav>
    )
}


export default NavBar;