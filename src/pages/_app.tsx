import { CssBaseline, Box } from '@mui/material';

import { AppBar } from '../components/appBar';
import type { AppProps } from 'next/app';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <CssBaseline>
      <Box sx={{backgroundColor: '#F6F4F6', height:'100vh'}}>
        <AppBar />
        <Component {...pageProps} />
      </Box>
    </CssBaseline>
    
  );
};
