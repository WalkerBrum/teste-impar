import { Drawer, Box } from "@mui/material"

interface ICreateCardProps {
    createCardOpen: boolean;
}

export const CreateCard: React.FC<ICreateCardProps>  = ({ createCardOpen}) => {
    return (
        <Drawer open={createCardOpen} anchor='right'>
            <Box sx={{
                width: '400px'
            }}>

            </Box>
        </Drawer>
    )
}