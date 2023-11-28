
import { createContext, useState } from 'react'

export const DataContext = createContext();



export const DataProvider = ({ children }) => {


    const [open, setOpen] = useState(false);
    const [close, setClose] = useState(false);

    const [data, setData] = useState([]);

    const [filter, setFilter] = useState('');

    const [comment, setComment] = useState('');
    const [update, setUpdate] = useState(false);
    const [idRating, setIdRating] = useState(false);


    return (
        <DataContext.Provider value={{ data, setData, filter, setFilter, comment, setComment, update, setUpdate, idRating, setIdRating, open, setOpen, close, setClose }}>
            {children}
        </DataContext.Provider>
    )
}
