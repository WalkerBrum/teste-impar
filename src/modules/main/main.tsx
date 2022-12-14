import { Box } from '@mui/material';

import { SearchCard } from './components/search-card';
import { List } from './components/list';
import Head from 'next/head';

export const Main = () => {
  return (
    <Box sx={{
      overflowX: 'hidden',
      margin: '0',
      backgroundColor: '#F6F4F6'
    }}>
      <Head>
        <title>Teste Ímpar</title>
      </Head>

      <SearchCard />
      <List />
    </Box>
  );
};