import { Box } from "@mui/material";
import { useState } from 'react';
import { CreateCard } from "./create-card";

import { Header } from "./header";

export const SearchResults= () => {
    const [ createCardOpen, setCreateCardOpen ] = useState(false);

    return (
        <Box sx={{
            width: "70%",
            margin: '0 auto'
        }}>
            <Header setCreateCardOpen={setCreateCardOpen}/>
            <CreateCard createCardOpen={createCardOpen}/>
        </Box>
    )
}