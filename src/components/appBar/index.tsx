import { AppBar as MuiAppBar } from '@mui/material';
import { LogoSvg } from '../svg/LogoSvg';

export const AppBar = () => {
    return (
        <MuiAppBar sx={{
            padding: '15px',
            background: "linear-gradient(90deg, rgba(88,27,116,1) 0%, rgba(155,50,109,1) 100%);"
        }}>
            <LogoSvg />
        </MuiAppBar>
    );
};