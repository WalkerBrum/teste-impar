import CssBaseline from '@mui/material/CssBaseline';

import { AppBar } from '../components/appBar';
import type { AppProps } from 'next/app';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <CssBaseline>
      <AppBar />
      <Component {...pageProps} />
    </CssBaseline>
    
  );
};
