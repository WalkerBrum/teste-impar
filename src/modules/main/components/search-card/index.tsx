import { Box } from '@mui/material';
import { BackgroundImage } from "./background-image";
import { Search } from "./search";

export const SearchCard = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <BackgroundImage />
            <Search />
        </Box>
    );
};