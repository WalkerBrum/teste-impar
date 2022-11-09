import { Box, Card, CardContent, CardActions, Button, Typography, Snackbar, Alert, CardMedia } from '@mui/material';

import Image from 'next/image';
import iconePage from '../svg/icone.svg';
import trashIcon from '../svg/Icon-trash.svg';
import editIcon from '../svg/Icon-edit.svg';
import { useState } from 'react';

interface ICardResultProps {
    name: string;
    imageUrl: string;
    handleDeleteOpen: () => void;
}

export const CardResult: React.FC<ICardResultProps> = ({ handleDeleteOpen, name, imageUrl }) => {
  const [openAlertEditCard, setOpenAlertEditCard] = useState(false);

  const toggleMessageEditCard = () => {
    if (openAlertEditCard) return;

    setOpenAlertEditCard((state: boolean) => !state);
  };

  return (
    <Card sx={{
      width: { xs: '100%', sm: '205px', lg: '220px' },
      height: { xs: '50vh', sm:'280px'},
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
      borderRadius: '8px'
    }}>
      <Snackbar
        open={openAlertEditCard}
        autoHideDuration={6000}
        onClose={() => setOpenAlertEditCard(false)}
        message="Note archived"
        sx={{
          width: '100%',
        }}
        anchorOrigin={{
          horizontal: 'center',
          vertical: 'top',
        }}
      >
        <Alert color="error">Funcionalidade não implementada</Alert>
      </Snackbar>
      <CardContent>
        <Box sx={{
          margin: '10px auto 25px auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        >
          <CardMedia
            component="img"
            image={imageUrl}
            sx={{height: {xs: '200px', sm:'130px'}, borderRadius: '8px'}}
            alt='Foto Cachorro'
          />
        </Box>

        <Typography
          sx={{
            fontSize: {xs: '20px', sm: '16px'},
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          {name}
        </Typography>
      </CardContent>

      <CardActions
        sx={{
          display: 'flex',
          padding: '0',
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Button
            onClick={handleDeleteOpen}
            variant='contained'
            sx={{
              borderRadius: '0',
              backgroundColor: '#F6F4F6',
              color: '#A2A7AA',
              margin: 0,
              border: '0px solid #A2A7AA',
              display: 'flex',
              justifyContent: 'center',
              gap: '10px',
              alignItems: 'center',
              padding: '8px',
              width: '50%',
              '&:hover': {
                color: 'white',
                backgroundColor: '#CFB8AC',
                borderColor: '#E76316',
              }
            }}
          >
            <Image
              src={trashIcon}
              width={15}
              height={15}
              alt='Excuir Card'
            />
                        Excluir
          </Button>
          <Button
            variant='contained'
            sx={{
              borderRadius: '0',
              backgroundColor: '#F6F4F6',
              color: '#A2A7AA',
              margin: 0,
              border: '0px solid #A2A7AA',
              display: 'flex',
              justifyContent: 'center',
              gap: '10px',
              padding: '8px',
              alignItems: 'center',
              width: '50%',
              '&:hover': {
                color: 'white',
                backgroundColor: '#CFB8AC',
                borderColor: '#E76316',
              }
            }}
            onClick={toggleMessageEditCard}
          >
            <Image
              src={editIcon}
              width={15}
              height={15}
              alt='Edit Card'
            />
                        Editar
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};