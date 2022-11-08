import { Paper, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import Image from 'next/image';
import image from './image/search.png';
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
                height: '65px',
                borderRadius: '8px',
                fontSize: '24px',
                marginTop: '75px'
            }}
        >
            <InputBase
                sx={{
                    ml: 1,
                    flex: 1,
                    padding: '15px',
                    fontSize: '20px'
                }}
                placeholder="Digite aqui sua busca..."
                onChange={(event) => setValue(event.target.value)}
            />
            <Box
                sx={{
                    color: '#A4A4A4',
                    margin: 'auto 15px auto 15px',
                    cursor: 'pointer',
                    '&:hover': {
                        scale: '1.1',
                    },
                }}
                onClick={submit}
            >
                <Image
                    src={image}
                    width={36}
                    height={36}
                    alt='Icone Pesquisar'
                />
            </Box>
        </Paper>
    );
}; 