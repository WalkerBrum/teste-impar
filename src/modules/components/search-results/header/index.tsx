import { Box, Button, Typography } from "@mui/material";

interface IHeaderProps {
    setCreateCardOpen: (boolean) => void;
}

export const Header: React.FC<IHeaderProps> = ({ setCreateCardOpen }) => {

    return (
        <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: '40px auto'
        }}> 
            <Typography variant='h4' color='#5F1478'>Resultado de busca</Typography>
            <Button 
                variant='contained'
                onClick={() => setCreateCardOpen(true)}
                sx={{
                    backgroundColor:'#E76316',
                    fontSize: '18px',
                    textTransform: 'none',
                    padding: '10px 50px',
                    borderRadius: '8px',
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