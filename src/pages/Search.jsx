import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../context/GlobalData';
import { useSearchParams } from 'react-router-dom';

import '../components/styles/Grid.css'
import NavBar from '../components/NavBar';
import { IoRestaurantOutline } from 'react-icons/io5';
import Card from '../components/Card';
import LeftSidebar from '../components/shared/Leftsidebar/LeftSidebar';

const Search = () => {
    const [searchParams] = useSearchParams();
    const { data, filter } = useContext(DataContext);

    const [filterData, setFilterData] = useState([])


    const query = searchParams.get("q");

    const getSearchProject = () => {


        if (filter === "Minhas Habilidades") {
            console.log(data)
            const newData = data.filter((post) => {
                return post.tecnologias.toLowerCase().includes(query.toLowerCase())
            })

            return setFilterData(newData)
        }


        const newData = data.filter((post) => {
            return post.titulo.toLowerCase().includes(query.toLowerCase())
        })

        return setFilterData(newData);



    }

    useEffect(() => {


        getSearchProject();


    }, [query]);

    return (
        <>


            <NavBar />
            <LeftSidebar />
            <div className="container">


                <div className="movies-container">

                    {filterData.length === 0 && <p>Caregando...</p>}

                    {filterData.length > 0 && filterData.map((projecto) =>
                        <ProjectCard projecto={projecto} />
                    )}

                </div>
            </div>
        </>
    )
}

export default Search