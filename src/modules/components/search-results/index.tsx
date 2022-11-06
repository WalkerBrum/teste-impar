import { Box } from "@mui/material";
import { useState } from 'react';
import { CreateCard } from "./create-card";

import { Header } from "./header";
import { ShowCard } from "./show-cards";

export const SearchResults = () => {
    const [createCardOpen, setCreateCardOpen] = useState(false);

    const openModal = () => {
        setCreateCardOpen(true);
    }

    return (
        <Box sx={{
            width: "80%",
            margin: '0 auto'
        }}>
            <Header openModal={openModal} />
            <ShowCard />
            <CreateCard createCardOpen={createCardOpen} />
        </Box>
    )
}