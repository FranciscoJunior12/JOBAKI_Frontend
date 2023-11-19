import { useState, useEffect } from "react";

const useFecth = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIspending] = useState(true);
    const [error, setError] = useState(null);

    const getData = async () => {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw Error("Could not fetch resources for that endpoint");
            }
            const data = await response.json();
            setData(data);
            setError(null);
            setIspending(false)
        } catch (error) {
            setError(error);
            setIspending(false);
        }
    }
    useEffect(() => {
        getData();
    }, [url])

    return { data, isPending, error }
}

export default useFecth;