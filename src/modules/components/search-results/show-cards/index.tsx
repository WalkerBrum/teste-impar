import { Box } from '@mui/material';
import { useState } from 'react';

import { CardResult } from "./card";
import { DeleteCard } from "./delete-card";

export const ShowCard = () => {
    const [deleteOpen, setDeleteOpen] = useState(false);

    const handleDeleteOpen = () => setDeleteOpen(true);
    const handleDeleteClose = () => setDeleteOpen(false);

    return (
        <Box sx={{ margin: '34px 10px'}}>
            <CardResult  handleDeleteOpen={handleDeleteOpen}/>
            <DeleteCard deleteOpen={deleteOpen} handleDeleteClose={handleDeleteClose}/>
        </Box>
    )
}