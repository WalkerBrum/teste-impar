import { Box } from "@mui/material";
import { useState } from 'react';
import { CreateCard } from "./create-card";

import { Header } from "./header";

export const SearchResults= () => {
    const [ createCardOpen, setCreateCardOpen ] = useState(false);

    const openModal = () => {
        setCreateCardOpen(true);
    }

    return (
        <Box sx={{
            width: "70%",
            margin: '0 auto'
        }}>
            <Header openModal={openModal}/>
            <CreateCard createCardOpen={createCardOpen}/>
        </Box>
    )
}