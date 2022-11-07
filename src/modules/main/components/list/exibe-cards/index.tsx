import { Box } from '@mui/material';

import { useState, useEffect } from 'react';
import { CardResult } from "./card";
import { DeleteCard } from "./delete-card";
import { useSearchContext } from '../../../../../context/searchContext';

export const ExibeCard = () => {
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [dataApi, setDataApi] = useState([]);
    
    const { searchValue } = useSearchContext();
 
    const sendData = async (json: Array<object>) => {
        if (searchValue.length > 0) {
            const filterName =  json.filter((data: {name: string, id: number}) => data.name.toLowerCase() === searchValue);
            console.log(typeof(filterName));

            setDataApi(
                filterName.map((data: {name: string, id: number}) => 
                    <CardResult  
                        handleDeleteOpen={handleDeleteOpen} name={data.name}
                    />
                )
            );
            
        } else {
            setDataApi(
                json.map((data: {name: string, id: number}) => 
                    <CardResult  
                        handleDeleteOpen={handleDeleteOpen} name={data.name} key={data.id}
                    />
                )
            );
        }
    }

    useEffect(() => {

        const fetchData = async() => {
            const response = await fetch('/api/hello');
            const json = await response.json();

            sendData(json)
        }

        fetchData();
    }, [searchValue]);

    const handleDeleteOpen = () => setDeleteOpen(true);
    const handleDeleteClose = () => setDeleteOpen(false);
    
    return (
        <Box sx={{ margin: '36px 10px', display: 'flex', flexWrap: 'wrap', gap: '37px'}}>
            {dataApi}
            <DeleteCard deleteOpen={deleteOpen} handleDeleteClose={handleDeleteClose}/>
        </Box>
    )
}