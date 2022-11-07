import { Paper, InputBase , IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { useSearchContext } from '../../../../../context/searchContext';
import { useState } from 'react';

export const Search = () => {
    const [value, setValue] = useState();

    const { setSearchValue, searchValue } = useSearchContext();

    const submit = () => {
        if (!value) return;
        
        setSearchValue(value);
    }

    return (
        <Paper
            component="form"
            sx={{ 
                 display: 'flex', 
                 alignItems: 'center', 
                 width: '80%',
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
                onChange={(event) => setValue(event.target.value)}
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
                    onClick={submit} 
                >
                    <SearchIcon sx={{ 
                        fontSize:"50px",
                        padding: '10px' 
                    }} />
                </IconButton>
        </Paper>
    );  
}; 