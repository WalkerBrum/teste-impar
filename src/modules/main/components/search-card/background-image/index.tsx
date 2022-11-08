import { Paper, Card, CardMedia, Box } from '@mui/material';


import Image from 'next/image';
import image from './image/fundo-busca.png';

export const BackgroundImage = () => {
    return (
        <Box sx={{
            width: '100vw',
            height: {xs: '230px', sm:'261px'},
            overflowY: 'hidden',
            padding: '0',
        }}>
            <Image
                src={image}
                alt='Imagem de fundo'
                style={{width: '100%', height: '100%'}}
            />
        </Box>
    );
};