import { Box, Grid } from '@mui/material';

import { useState, useEffect } from 'react';
import { apiNext } from '../../../../services/api';
import { CardResult } from "./card";
import { DeleteCard } from "./delete-card";

interface IShowCardProps {
    then: () => void;
}

export const ShowCard: React.FC<IShowCardProps> = () => {
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [dataApi, setDataApi] = useState([]);
    

    useEffect(() => {
        // apiNext().then((response) => {
        //     const data = response.data;
        //     console.log(data);
        // });
        const fetchData = async() => {
            const response = await fetch('/api/hello');
            const json = await response.json();
            setDataApi(json)
        }

        fetchData();
    }, []);

    const handleDeleteOpen = () => setDeleteOpen(true);
    const handleDeleteClose = () => setDeleteOpen(false);

    return (
        <Box sx={{ margin: '36px 10px', display: 'flex', flexWrap: 'wrap', gap: '37px'}}>
            {dataApi.map((data: object) => <CardResult  
                handleDeleteOpen={handleDeleteOpen} name={data.name}
            />)}
            <DeleteCard deleteOpen={deleteOpen} handleDeleteClose={handleDeleteClose}/>
        </Box>
    )
}