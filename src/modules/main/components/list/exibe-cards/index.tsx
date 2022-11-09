import { Box, Typography } from '@mui/material';

import { useState, useEffect, useRef } from 'react';
import { CardResult } from './card';
import { DeleteCard } from './delete-card';
import { useSearchContext } from '../../../../../context/searchContext';

export interface IDog {
    weight: string;
    height: string;
    id: number;
    name: string;
    bred_for?: string;
    breed_group?: string;
    life_span: string;
    temperament?: string;
    origin?: string;
    reference_image_id: string;
    image: { url: string };
    country_code?: string;
    description?: string;
    history?: string;
}

export const ExibeCard = () => {
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [dataDogs, setDataDogs] = useState<IDog[]>([]);
    const allDogs = useRef<IDog[]>([]);

    const { searchValue } = useSearchContext();

    useEffect(() => {
        sendData(searchValue);
    }, [searchValue]);

    const sendData = async (searchName: string) => {
        if (searchName.length > 0) {
            const filterDogs = allDogs.current.filter(
                (data) => data.name.toLowerCase().includes(searchName.toLowerCase())
            );

            setDataDogs(
                filterDogs
            );

        }
    };

    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch('https://api.thedogapi.com/v1/breeds');
            const json = await response.json();

            allDogs.current = json;

            setDataDogs(json);
        };

        fetchData();
    }, []);

    const handleDeleteOpen = () => setDeleteOpen(true);
    const handleDeleteClose = () => setDeleteOpen(false);

    return (
        <Box sx={{
            margin: '36px 0px',
            display: 'flex',
            justifyContent: { xs: 'center' },
            flexWrap: 'wrap',
            gap: { xs: '20px', sm: '20px' }
        }}
        >
            {dataDogs.length > 0
                ? (
                    dataDogs.map((data, key) =>
                        <CardResult
                            handleDeleteOpen={handleDeleteOpen}
                            name={data.name}
                            imageUrl={data.image.url}
                            key={key}
                        />)
                ) 
                : (
                    <Typography 
                        variant='h3'
                        sx={{
                            fontWeight: 'bold',
                            letterSpacing: '2px',
                            margin: '60px',
                            padding: '50px',
                            fontSize: {xs: '30px', md: '32px'},
                            border: '2px solid #c9520d'
                        }}
                    >
                        Busca não encontrada
                    </Typography>
                )    
            }
            <DeleteCard deleteOpen={deleteOpen} handleDeleteClose={handleDeleteClose} />
        </Box>
    );
};