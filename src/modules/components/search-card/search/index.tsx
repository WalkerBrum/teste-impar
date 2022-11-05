import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export const Search = () => {

    return (
        <Paper
            component="form"
            sx={{ 
                 display: 'flex', 
                 alignItems: 'center', 
                 width: '70%',
                 position: 'absolute',
                 height: '55px',
                 borderRadius: '8px',
                 fontSize: '24px',
                 marginTop: '75px' 
            }}
        >
            <InputBase
                sx={{ 
                    ml: 1, 
                    flex: 1,
                    padding:'10px'
                }}
                placeholder="Digite aqui sua busca..."
            />
                <IconButton 
                        type="button" 
                        aria-label="search" 
                        sx={{ 
                        color:'#A4A4A4',  
                        height: '100%',
                        '&:hover': {
                            backgroundColor: '#e9e9e9',
                            color: 'black',
                            fontSize: '10px',
                        },
                    }} 
                >
                    <SearchIcon sx={{ 
                        fontSize:"50px",
                        padding: '10px' 
                    }} />
                </IconButton>
        </Paper>
    );  
}; 