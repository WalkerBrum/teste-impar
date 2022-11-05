import { Box, Card, CardContent, CardActions, Grid, Button, Typography } from "@mui/material";

import Image from 'next/image';
import image from './image/icone.svg';

export const CardResult = () => {

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
                        margin: '28px auto 32.17px auto'
                    }}
                >
                    <Image
                        src={image}
                        width={46}
                        height={46}
                        alt='Logo Create Card'
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    />
                </Box>

                <Typography 
                        sx={{
                            fontSize: '16px',
                        }}
                >
                    Walker Brum Lobato Filho
                </Typography>
            </CardContent>

            <CardActions sx={{
                    display:'flex',
                    padding: '0',
                    width: '100%',
                }}
            >
                <Box>
                    <Button
                        variant='contained'
                        sx={{
                            borderRadius: '0',
                            backgroundColor: '#F6F4F6',
                            color: '#A2A7AA',
                            margin: 0,
                            border: '0px solid #A2A7AA'
                        }}
                    >
                        Delete
                    </Button>
                    <Button
                        variant='contained'
                        sx={{
                            borderRadius: '0',
                            backgroundColor: '#F6F4F6',
                            color: '#A2A7AA',
                            margin: 0,
                            border: '0px solid #A2A7AA'
                        }}
                    >
                        Edite
                    </Button>
                </Box>
            </CardActions>
        </Card>
    )
}