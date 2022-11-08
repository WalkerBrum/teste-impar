import { Box } from 'from@mui/material';

import { useEffect, useState } from "react";

export const dataId = () => {
    const [dataApiId, setDataApiId] = useState([]);
    useEffect(() => {

        const keyApi = 'live_0PEzsQjY0NER91jFlwcsXysHYvG7W7qG6cgVINC4wQkorQ5Xc81GiYg8WAeiw5rt';
         
        const fetchData = async() => {
            const response = await fetch('https://api.thedogapi.com/v1/breeds');
            const json = await response.json();

            setDataApiId(json);
        }

        fetchData();
    }, []);

    return (
        <Box sx={{
                overflowX: 'hidden',
                margin: '0',
                backgroundColor: '#F6F4F6'
            }}>
        </Box>
    );    
}