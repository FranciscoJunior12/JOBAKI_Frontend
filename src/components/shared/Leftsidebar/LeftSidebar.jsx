import { FaUserEdit, FaUserFriends } from "react-icons/fa";
import "./styles.css"
import { BsStarFill } from "react-icons/bs";
import { RiRestaurantLine } from "react-icons/ri";

const LeftSidebar = () => {
    return (
        <aside className="side-bar">
            <ul>
                <li> 
                    <span><FaUserEdit /></span>
                    Projectos
                </li>
                <li>
                    <span><BsStarFill /></span>
                    Propostas Enviadas
                </li>
                <li>
                    <span><RiRestaurantLine /></span>
                    Perfil
                </li>
                <li>
                    <span><FaUserFriends /></span>
                    Suporte
                </li>
            </ul>
        </aside>
    )
}

export default LeftSidebar;