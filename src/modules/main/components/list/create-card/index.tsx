import { Drawer, Box, Grid, Typography, Divider, InputBase, Button, Snackbar, Alert } from '@mui/material';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

import Image from 'next/image';
import image from './image/create-card.png';
import { useRef, useState } from 'react';

interface ICreateCardProps {
    createCardOpen: boolean;
    closeModalCreateCard: () => void
}

export const CreateCard: React.FC<ICreateCardProps> = ({ createCardOpen, closeModalCreateCard }) => {
  const [openAlertCreateCard, setOpenAlertCreateCard] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const toggleMessageCreateCard = () => {
    if (openAlertCreateCard) return;

    setOpenAlertCreateCard((state: boolean) => !state);
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <Drawer
      open={createCardOpen}
      anchor='right'
      onClose={closeModalCreateCard}>
      <Box sx={{
        padding: '46px 32px 0px 32px',
        width: { xs: '100vw', sm: '100%', md: '610px' }
      }}>
        <Grid container >
          <Grid xs={12} md={1.4} item>
            <Image
              src={image}
              width={46}
              height={46}
              alt='Logo Create Card'
            />
          </Grid>
          <Grid
            xs={12}
            md={4}
            item
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              variant='h4'
              color='#5F1478'
              sx={{
                fontSize: '32px',
                fontWeight: 'bold'
              }}
            >
                            Criar Card
            </Typography>
          </Grid>
          <Box sx={{
            position: 'absolute',
            right: '10px',
            top: '50px',
            borderRadius: '8px',
            cursor: 'pointer',
            padding: '5px 20px',
            color: '#454545',
            display: 'flex',
            alignItems: 'center',
            gap: '3px',
            transition: 'all ease-in-out 0.6s',
            '&:hover': {
              letterSpacing: '3px',
              color: '#E76316',
              transition: 'all ease-in-out 0.6s'
            }
          }}
          onClick={closeModalCreateCard}
          >
            <Typography sx={{ fontSize: '18px' }}
            >
                            Fechar
            </Typography>
            <ArrowForwardOutlinedIcon sx={{ fontSize: '18px' }} />
          </Box>
        </Grid>

        <Divider sx={{ marginTop: '30.71px' }} />

        <Box sx={{
          marginTop: '43.29px'
        }}>

          <Typography
            variant='h4'
            color='#454545'
            sx={{
              fontSize: '14px',
              textTransform: 'uppercase',
            }}
          >
                        Digite um nome para o card
          </Typography>

          <InputBase
            sx={{
              border: '1px solid #B9B9B9',
              width: '100%',
              padding: '10px 0 11px 25px',
              borderRadius: '8px',
              fontSize: '18px',
              marginTop: '11.78px'
            }}
            placeholder="Digite o título"
          />
        </Box>

        <Box sx={{
          marginTop: '50.22px'
        }}>
          <Typography
            variant='h4'
            color='#454545'
            sx={{
              fontSize: '14px',
              textTransform: 'uppercase',
            }}
          >
                        Inclua uma imagem para aparecer no card
          </Typography>

          <Box sx={{
            position: 'relative',
            marginLeft: '0'
          }}>
            <InputBase
              sx={{
                ml: 1,
                flex: 1,
                border: '1px solid #B9B9B9',
                width: '100%',
                padding: '10px 0 11px 25px',
                borderRadius: '8px',
                fontSize: '18px',
                marginTop: '11.78px'
              }}
              placeholder="Nenhum arquivo selecionado"
            />
            <Button
              variant='outlined'
              onClick={handleClick}
              sx={{
                padding: '10px 40px',
                color: '#E76316',
                borderColor: '#E76316',
                position: 'absolute',
                top: { xs: '80px', md: '17.5px' },
                right: '3px',
                borderRadius: '8px',
                transition: 'all ease-in-out 0.6s',
                '&:hover': {
                  color: 'white',
                  backgroundColor: '#E76316',
                  borderColor: '#E76316',
                  transition: 'all ease-in-out 0.6s',
                }
              }}
            >
                            Escolher Arquivo</Button>
            <input
              ref={inputRef}
              style={{ display: 'none' }}
              type="file"
              name="arquivo"
            />
          </Box>
        </Box>

        <Divider sx={{ margin: { xs: '71.22px 0 26px 0', md: '51.22px 0 26px 0' } }} />

        <Box sx={{
          display: 'flex',
          justifyContent: 'end',
        }}>
          <Button
            variant='contained'
            sx={{
              backgroundColor: '#E76316',
              fontSize: '18px',
              textTransform: 'none',
              padding: '10px 50px',
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: '#c9520d',
                boxShadow: '0px 0px 40px 0px #E76316'
              },
            }}
            onClick={toggleMessageCreateCard}
          >
                        Criar card
          </Button>
        </Box>

        <Snackbar
          open={openAlertCreateCard}
          autoHideDuration={6000}
          onClose={() => setOpenAlertCreateCard(false)}
          message="Note archived"
          anchorOrigin={{
            horizontal: 'right',
            vertical: 'bottom',
          }}
        >
          <Alert color="error">Funcionalidade não implementada</Alert>
        </Snackbar>
      </Box>
    </Drawer>
  );
};