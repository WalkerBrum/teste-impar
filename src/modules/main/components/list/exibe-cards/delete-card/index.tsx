import { Modal, Box, Typography, Button, Divider, Snackbar, Alert } from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import { useState } from 'react';

interface IDeleteCardProps {
    deleteOpen: boolean;
    handleDeleteClose: () => void;
}

export const DeleteCard: React.FC<IDeleteCardProps> = ({ deleteOpen, handleDeleteClose }) => {
  const [openAlertDeleteCard, setOpenAlertDeleteCard] = useState(false);

  const toggleMessageDeleteCard = () => {
    if (openAlertDeleteCard) return;
        
    setOpenAlertDeleteCard((state: boolean) => !state);       
  };
    
  const style = {
    position: 'absolute',
    top: {xs: '25%', sm:'50%'},
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {xs: '100vw', sm: '434px'},
    height: '438px',
    bgcolor: 'background.paper',
    border: '0px',
    boxShadow: 24,
    p: 4,
    textAlign: 'center',
    textTransform: 'uppercase',
  };


  return (
    <Modal
      open={deleteOpen}
      onClose={handleDeleteClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          onClick={handleDeleteClose}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#E76316',
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            fontSize: '16px',
            padding: '2px',
            position: 'absolute',
            top: {xs: '10px', sm:'-15px'},
            right: { xs: '10px', sm:'-15px'},
            color: 'white',
            cursor: 'pointer',
            transition: '0.5s ease-out',
            '&:hover': {
              backgroundColor: '#DB2525',
              transition: '0.5s ease-out',
            }
          }}
        >
                    X
        </Box>
        <Typography id="modal-modal-description"
          sx={{
            mt: 2,
            display: 'flex',
            height: '95%',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <DeleteOutlinedIcon
            sx={{
              color: '#DB2525',
              fontSize: '80px',
              alignSelf: 'center',
              margin: 'auto',
              borderRadius: '50%',
              border: '6px solid #E4E4E4',
              width: '159px',
              height: '159px',
              padding: '30px',
              backgroundColor: '#FDF2F2',
              BorderColor: '#E4E4E4' 
            }}
          />
          <Typography sx={{ padding: '20px', color: '#DB2525', fontWeight: 'bolder' }} id="modal-modal-title" variant="h5" component="h2">
                        Excluir
          </Typography>

          <Typography sx={{ fontSize: '12px'}}>
                        Certeza que deseja excluir?
          </Typography>

          <Divider sx={{ margin: '25px 0 15px 0', width: '100%' }} />

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

            <Button
              sx={{
                width: '165px',
                height: '48px',
                margin: '10px 10px 0 0',
                borderRadius: '8px',
                '&:hover': {
                  color: 'white',
                  backgroundColor: '#E76316',
                  borderColor: '#E76316',
                }
              }}
              variant="contained"
              color="error"
              title="Excluir card"
              onClick={toggleMessageDeleteCard}
            >
                            Excluir
            </Button>

            <Button
              sx={{
                width: '165px',
                height: '48px',
                margin: '10px 0 0 0',
                borderRadius: '8px',
                '&:hover': {
                  fontWeight: 'bolder',
                  border: '1px solid red',
                }
              }}
              variant="outlined"
              color="error"
              onClick={handleDeleteClose}
              title="Cancelar exclusão">
                            Cancelar
            </Button>
          </Box>
        </Typography>
        <Snackbar
          open={openAlertDeleteCard}
          autoHideDuration={6000}
          onClose={() => setOpenAlertDeleteCard(false)}
          message="Note archived"
          sx={{
            width: '100%',
          }}
          anchorOrigin={{
            horizontal: 'center',
            vertical: 'top',
          }}
        >
          <Alert color="error">Funcionalidade não implementada</Alert>
        </Snackbar>
      </Box>
    </Modal>
  );
};