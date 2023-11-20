import { useContext, useEffect, useState } from "react";
import NavBar from "../components/NavBar"
import Card from "../components/Card";
import ProjectCard from "../components/cards/Project/ProjectCard";
import { IoRestaurantOutline } from "react-icons/io5";
import { DataContext } from "../context/GlobalData";
import LeftSidebar from "../components/shared/Leftsidebar/LeftSidebar";
import useFecth from "../hooks/useFetch";
import '../components/styles/Grid.css'

const Home = () => {

    // const { data: projects, isPending, error } = useFecth("https://jobaki-rest-api.vercel.app/api/jobaki/post");
    // const { setData } = useContext(DataContext);
    //const [projects, setProjects] = useState([]);

    const [post, setPosts] = useState([]);
    

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const [nome, setNome] = useState('')

    const getProject = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        //setData(data);
        console.log(data)
        setPosts(data);
        setNome('Augusto')
        console.log(post)
    }

    useEffect(() => {
        const url = `https://jobaki-rest-api.vercel.app/api/jobaki/post`;
        getProject(url);

    }, []);

    return (
        <>
            <NavBar />
            <LeftSidebar />
            <div className="container">


                <div className="movies-container">

                    {post.length === 0 && <p>Caregando...</p>}
                    {post.length > 0 && post.map((projecto) =>

                        currentUser.perfil === "Freelancer" ? <ProjectCard projecto={projecto} /> : (
                            currentUser._id === projecto.companyId ? <ProjectCard projecto={projecto} /> : ""
                        ))}

                </div>
            </div>
        </>
    )
}

export default Home;