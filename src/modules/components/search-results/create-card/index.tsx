import { Drawer, Box, Grid, Typography, Divider, InputBase, useMediaQuery, Theme, Button, Snackbar, Alert } from "@mui/material";

import Image from 'next/image';
import image from './image/create-card.png';
import { useRef, useState } from 'react';

interface ICreateCardProps {
    createCardOpen: boolean;
    Ref: boolean;
}

export const CreateCard: React.FC<ICreateCardProps> = ({ createCardOpen }) => {
    const [openAlert, setOpenAlert] = useState(false);

    const inputRef = useRef();

    const toggleMessage = () => {
        if (openAlert) return
        
        setOpenAlert((state: boolean) => !state);       
    }

    const handleClick = () => {
        inputRef.current.click();
    };

    return (
        <Drawer open={createCardOpen} anchor='right'>
            <Box sx={{
                padding: '46px 32px',
                width: '610px'
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
                            placeholder="Digite aqui sua busca..."
                        />
                        <Button
                            variant='outlined'
                            onClick={handleClick}
                            sx={{
                                padding: '10px 40px',
                                color: '#E76316',
                                borderColor: '#E76316',
                                position: 'absolute',
                                top: '17.5px',
                                right: '3px',
                                borderRadius: '8px',
                                '&:hover': {
                                    color: 'white',
                                    backgroundColor: '#E76316',
                                    borderColor: '#E76316',
                                }
                            }}
                        >
                            Escolher Arquivo</Button>
                        <input
                            ref={inputRef}
                            style={{ display: "none" }}
                            type="file"
                            name="arquivo"
                        />
                    </Box>
                </Box>

                <Divider sx={{ margin: '51.22px 0 26px 0' }} />

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
                        onClick={toggleMessage}
                    >
                        Criar card
                    </Button>
                </Box>

                <Snackbar
                    open={openAlert}
                    autoHideDuration={6000}
                    onClose={() => setOpenAlert(false)}
                    message="Note archived"
                    anchorOrigin={{
                        horizontal: "right",
                        vertical: "bottom",
                    }}
                >
                    <Alert color="error">Funcionalidade não implementada</Alert>
                </Snackbar>
            </Box>
        </Drawer>
    )
}