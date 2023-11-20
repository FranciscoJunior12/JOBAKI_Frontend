import { FaUserEdit, FaUserFriends } from "react-icons/fa";
import "./styles.css";
import { BsStarFill } from "react-icons/bs";
import { RiRestaurantLine } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";

import { GrProjects } from "react-icons/gr";
import { Link } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";

const LeftSidebar = () => {

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    return (
        <aside className="side-bar">
            <ul>


                {
                    currentUser.perfil === "Empresa" ? (<li>
                        <Link to="/home">
                            <span>
                                <IoHomeOutline />
                            </span>

                            <p>Meus Projectos</p>
                        </Link>
                    </li>) : (<li>
                        <Link to="/home">
                            <span>
                                <IoHomeOutline />
                            </span>

                            <p>Home</p>
                        </Link>
                    </li>)


                }
                {
                    currentUser.perfil === "Empresa" ? (<li>
                        <Link to="/projecto">
                            <span>
                                <GrProjects />
                            </span>
                            Publicar Projecto
                        </Link>
                    </li>) : ""


                }

                {
                    currentUser.perfil === "Freelancer" ? (<li>
                        <Link to="/propostas">
                            <span>
                                <BsStarFill />
                            </span>
                            Propostas Enviadas
                        </Link>
                    </li>) : ""


                }

                <li>
                    <Link to="/suporte">
                        <span>
                            <FaUserFriends />
                        </span>
                        Suporte
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <span>
                            <FiLogOut />
                        </span>
                        Sair
                    </Link>
                </li>
            </ul>
        </aside>
    );
};

export default LeftSidebar;
