import { Box, Button, Typography } from "@mui/material";

interface IHeaderProps {
    openModalCreateCard: () => void;
}

export const Nav: React.FC<IHeaderProps> = ({ openModalCreateCard }) => {

    return (
        <Box sx={{
            display: "flex",
            flexDirection: {xs: 'column', sm: 'row'},
            gap: '20px',
            alignItems: "center",
            justifyContent: "space-between",
            margin: '40px auto 0 auto'
        }}> 
            <Typography 
                variant='h3' 
                color='#5F1478'
                sx={{
                    fontSize: {xs: '30px', md: '32px'}
                }}
            >
                Resultado de busca
            </Typography>
            <Button 
                variant='contained'
                onClick={openModalCreateCard}
                sx={{
                    backgroundColor:'#E76316',
                    fontSize: '18px',
                    textTransform: 'none',
                    padding: '10px 30px',
                    borderRadius: '8px',
                    height: '48px',
                    width: {xs: '265px', sm:'173px'},
                    '&:hover': {
                        backgroundColor: '#c9520d',
                        boxShadow: '0px 0px 40px 0px #E76316'
                    },
                }}
            >
                Novo Card
            </Button>
        </Box>
    )
}