import { Paper, Card, CardMedia, Box } from '@mui/material';


import Image from 'next/image';
import image from './image/fundo-busca.png';

{/* <Card sx={{ with: '100%' }}>
    <CardMedia
    component="img"
    height="140"
    image='./image/fundo-busca.png'
    alt="Walker"
/> */}
const styles = {
    paperContainer: {
        backgroundImage: "url(./image/fundo-busca.png')",
        width: '100%',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
    }
};

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
                style={{width: '100%', margin: '0'}}
            />
        </Box>
    );
};