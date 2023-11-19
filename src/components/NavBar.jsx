import { Link, useNavigate } from 'react-router-dom';
import { BiSearchAlt2, BiLogOut } from "react-icons/bi";
import { IoRestaurantOutline } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineInsertComment } from "react-icons/md";
import './styles/Navbar.css';

import { useState, useContext } from 'react';
import { DataContext } from '../context/GlobalData';


const NavBar = () => {
    const { filter, setFilter } = useContext(DataContext);
    const [dropMenu, setDropMenu] = useState(false);

    const [search, setSearch] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();
        if (!search) return;

        console.log(filter)

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
                    <option value="Tipo de Cozinha" >Minhas Habilidades</option>
                    <option value="Localização" >Data de Publicação</option>
                    <option value="Faixa Preço" >Categoria</option>
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

                <span className='perfil' onClick={() => setDropMenu((current)=> !current)}>
                    <Link to="#" className='user-profile'>
                        <BsPersonCircle />
                        <p>Francisco Junior</p>
                    </Link>
                    {
                        dropMenu && (
                            <div className='profile-content'>
                                <Link to="#">Settings</Link>
                                <Link to="#">Help</Link>
                                <Link to="#">Sign out</Link>
                            </div>
                        )
                    }
                </span>
            </div>
        </nav>
    )
}


export default NavBar;