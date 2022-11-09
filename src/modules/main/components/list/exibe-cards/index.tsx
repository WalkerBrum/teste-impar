import { Box } from '@mui/material';

import { useState, useEffect, useRef } from 'react';
import { CardResult } from './card';
import { DeleteCard } from './delete-card';
import { useSearchContext } from '../../../../../context/searchContext';
import { imageConfigDefault } from 'next/dist/shared/lib/image-config';

export interface IDog {
    weight:             string;
    height:             string;
    id:                 number;
    name:               string;
    bred_for?:          string;
    breed_group?:       string;
    life_span:          string;
    temperament?:       string;
    origin?:            string;
    reference_image_id: string;
    image:              {url: string};
    country_code?:      string;
    description?:       string;
    history?:           string;
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
      const filterDogs =  allDogs.current.filter(
        (data) => data.name.toLowerCase().includes(searchName.toLowerCase()) 
      );

      setDataDogs(
        filterDogs
      );

    }
  };

  useEffect(() => {

    const fetchData = async() => {
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
      justifyContent: {xs: 'center'}, 
      flexWrap: 'wrap', 
      gap: {xs: '20px', sm:'20px'}
    }}
    >
      {dataDogs.map((data, key) => 
        <CardResult  
          handleDeleteOpen={handleDeleteOpen} 
          name={data.name}
          imageUrl={data.image.url}
          key={key}
        />
      )}
      <DeleteCard deleteOpen={deleteOpen} handleDeleteClose={handleDeleteClose}/>
    </Box>
  );
};