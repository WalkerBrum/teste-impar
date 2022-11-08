import { Paper, Card, CardMedia, Box } from '@mui/material';


import Image from 'next/image';
import image from './image/fundo-busca.png';

export const BackgroundImage = () => {
    return (
        <Box sx={{
            width: '100vw',
            overflowY: 'hidden',
            padding: '0',
        }}>
            <Image
                src={image}
                height={261}
                alt='Imagem de fundo'
                style={{width: '100%'}}
            />
        </Box>
    );
};