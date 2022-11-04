import { SearchCard } from './components/search-card';
import { SearchResults } from './components/search-results';

import { Box } from '@mui/material';


export const Main = () => {
    return (
        <Box sx={{
            overflowX: 'hidden',
            margin: '0'
        }}>
            <SearchCard />
            <SearchResults />
        </Box>
    )
}