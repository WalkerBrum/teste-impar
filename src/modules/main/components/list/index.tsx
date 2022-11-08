import { Box } from "@mui/material";
import { useState } from 'react';
import { CreateCard } from "./create-card";

import { Nav } from "./nav";
import { ExibeCard } from "./exibe-cards";

export const List = () => {
    const [createCardOpen, setCreateCardOpen] = useState(false);

    const openModalCreateCard = () => {
        setCreateCardOpen(true);
    }

    const closeModalCreateCard = () => {
        setCreateCardOpen(false);
    }

    return (
        <Box sx={{
            width: "80%",
            margin: '0 auto'
        }}>
            <Nav openModalCreateCard={openModalCreateCard} />
            <ExibeCard />
            <CreateCard createCardOpen={createCardOpen} closeModalCreateCard={closeModalCreateCard} />
        </Box>
    )
}