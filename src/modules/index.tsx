import { SearchCard } from './components';

import { Box } from '@mui/material';

export const Main = () => {
    return (
        <Box sx={{
            overflowX: 'hidden',
            margin: '0'
        }}>
            <SearchCard />
        </Box>
    )
}