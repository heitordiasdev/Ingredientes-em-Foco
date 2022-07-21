import * as React from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import { Dialog } from '@mui/material';

function DialogConfirm(props) {

  const { open, setOpen, confirm } = props;

  const closeDialog = () =>{
    setOpen(false);
  }
  const deleteProduct = () =>{
    confirm()
    setOpen(false);
  }

  return (
    <Dialog open={open}>
      <DialogTitle>Deseja deletar o produto?</DialogTitle>
      <DialogActions>
        <Button sx={{color: '#E52928'}} onClick={()=>closeDialog()}>Cancelar</Button>
        <Button sx={{color: '#E52928'}} onClick={ ()=> deleteProduct() }>Confirmar</Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogConfirm 
