import { Box } from '@mui/material';

import { useState, useEffect } from 'react';
import { CardResult } from "./card";
import { DeleteCard } from "./delete-card";
import { useSearchContext } from '../../../../../context/searchContext';
import { imageConfigDefault } from 'next/dist/shared/lib/image-config';

export const ExibeCard = () => {
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [dataApi, setDataApi] = useState([]);
    
    const { searchValue } = useSearchContext();
 
    const sendData = async (json: Array<object>) => {
        if (searchValue.length > 0) {
            const filterName =  json.filter(
                (data: {name: string, id: number, image: {url: string}}) => (data.name.toLowerCase()) === (searchValue.toLowerCase())
            );

            setDataApi(
                filterName.map((data: {name: string, id: number}) => 
                    <CardResult  
                        handleDeleteOpen={handleDeleteOpen} 
                        name={data.name}
                        imageUrl={data.image.url}
                    />
                )
            );
            
        } else {
            setDataApi(
                json.map((data: {name: string, id: number}) => 
                    <CardResult  
                        handleDeleteOpen={handleDeleteOpen} name={data.name} key={data.id}
                        imageUrl={data.image.url}
                    />
                )
            );
        }
    }

    useEffect(() => {

        const fetchData = async() => {
            const response = await fetch('https://api.thedogapi.com/v1/breeds');
            const json = await response.json();

            sendData(json);
        }

        fetchData();
    }, [searchValue]);

    const handleDeleteOpen = () => setDeleteOpen(true);
    const handleDeleteClose = () => setDeleteOpen(false);
    
    return (
        <Box sx={{ 
                margin: '36px 0px', 
                display: 'flex',
                justifyContent: {xs: 'center'}, 
                flexWrap: 'wrap', 
                gap: {xs: '20px', sm:'20px'}
            }}
        >
            {dataApi}
            <DeleteCard deleteOpen={deleteOpen} handleDeleteClose={handleDeleteClose}/>
        </Box>
    )
}