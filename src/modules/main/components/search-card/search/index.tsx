import { Paper, InputBase, Box } from '@mui/material';

import Image from 'next/image';
import image from './image/search.png';
import { useSearchContext } from '../../../../../context/searchContext';

export const Search = () => {

  const { setSearchValue } = useSearchContext();

  return (
    <Paper
      component="form"
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: {xs: '90%', sm: '80%', lg: '70%'},
        position: 'absolute',
        height: '65px',
        borderRadius: '8px',
        fontSize: '24px',
        marginTop: '75px'
      }}
    >
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          padding: '15px',
          fontSize: '20px'
        }}
        placeholder="Digite aqui sua busca..."
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <Box
        sx={{
          color: '#A4A4A4',
          margin: 'auto 15px auto 15px',
          '&:hover': {
            scale: '1.1',
          },
        }}
      >
        <Image
          src={image}
          width={36}
          height={36}
          alt='Icone Pesquisar'
        />
      </Box>
    </Paper>
  );
}; 