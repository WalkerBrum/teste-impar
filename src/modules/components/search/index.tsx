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
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon sx={{ 
                    fontSize: '40px', color:'#A4A4A4', padding: '10px' 
                }} />
            </IconButton>
        </Paper>
    );  
}; 