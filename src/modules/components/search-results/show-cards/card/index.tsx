import { Box, Card, CardContent, CardActions, Button, Typography } from "@mui/material";

 import Image from 'next/image';
import image from '../svg/icone.svg';
import trashIcon from '../svg/Icon-trash.svg';
import editIcon from '../svg/Icon-edit.svg';

interface ICardResultProps {
    name: string;
    handleDeleteOpen: () => void;
}

export const CardResult: React.FC<ICardResultProps> = ({ handleDeleteOpen, name }) => {
    
    return (
        <Card sx={{
            width: '234px',
            height: '267px',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            borderRadius: '8px'
        }}>
            <CardContent>
                <Box sx={{
                    border: '1px solid #E4E4E4',
                    borderRadius: '50%',
                    width: '95px',
                    height: '95px',
                    backgroundColor: '#F6F4F6',
                    margin: '28px auto 32.17px auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                >
                    <Image
                        src={image}
                        width={64}
                        height={63}
                        alt='Logo Create Card'
                    />
                </Box>

                <Typography
                    sx={{
                        fontSize: '16px',
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
                            justifyContent: 'space-between',
                            alignItems: 'center',
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
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '50%',
                            '&:hover': {
                                color: 'white',
                                backgroundColor: '#CFB8AC',
                                borderColor: '#E76316',
                            }
                        }}
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
    )
}