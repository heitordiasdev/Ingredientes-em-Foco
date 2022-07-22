import React, { useState } from "react";
import { createUser } from "../../services/userService";
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";


export default function AddUser(props) {
   const { open, setOpen} = props;
  const [newName, setName] = useState()
  const [newCpfCnpj, setCpfCnpj] = useState()
  const [newEmail, setEmail] = useState()
  const [newPassword, setPassword] = useState()
  const [newDateNasc, setDateNasc] = useState()
    

  const userSubmit = async () => {
    await createUser(newName, newCpfCnpj, newEmail, newPassword, newDateNasc);
    setOpen(false)
  };

    const closeDialog = () =>{
      setName('');
      setCpfCnpj('');
      setEmail('');
      setPassword('');
      setDateNasc('');
      setOpen(false);
    }


    return (
        <>
        <Dialog open={open} >
        <DialogTitle color={'#618A2E'} alignItems={'center'}> Detalhes Usuario </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            label="nome"
            type="text"
            onChange={event => setName(event.target.value)}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="CPF/CNPJ"
            label="CPF/CNPJ"
            type="text"
            onChange={event => setCpfCnpj(event.target.value)}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="email"
            label="email"
            type="text"
            onChange={event => setEmail(event.target.value)}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="password"
            label="password"
            type="password"
            onChange={event => setPassword(event.target.value)}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="dateNasc"
            label="Data de Nacismento"
            type="text"
            onChange={event => setDateNasc(event.target.value)}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button sx={{backgroundColor:'#E52928','&:hover': {backgroundColor: '#F03F4E',},}} onClick={() => closeDialog()}>Cancel</Button>
          <Button sx={{backgroundColor:'#52691F','&:hover': {backgroundColor: '#618A2E',},}} onClick={userSubmit}>Salvar</Button>
        </DialogActions>
      </Dialog>
        </>
    );
}