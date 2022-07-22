import React, { useState } from "react";
import { updateUser } from "../../services/userService";
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions  } from "@mui/material";


export default function EditUser({setDialogUserEdit, user}) {

  const [newName, setName] = useState('')
  const [newCpfCnpj, setCpfCnpj] = useState('')
  const [newEmail, setEmail] = useState('')
  const [newPassword, setPassword] = useState('')
  const [newDateNasc, setDateNasc] = useState('')
  const [open, setOpen] = useState({setDialogUserEdit})
    console.log('2:',setDialogUserEdit)
    console.log('1:',open)
    const updateUser = async () => {
        await updateUser(user.id, newName, newCpfCnpj, newEmail, newPassword, newDateNasc)
        setDialogUserEdit(false)
    }

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
        <Dialog open={open}>
        <DialogTitle> Detalhes Usuario </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            label="nome"
            type="text"
            defaultValue={user.name}
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
            type="number"
            defaultValue={user.cpfCnpj}
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
            defaultValue={user.email}
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
            defaultValue='********'
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
            defaultValue={user.dateNasc}
            onChange={event => setDateNasc(event.target.value)}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button sx={{backgroundColor:'black'}} onClick={() => closeDialog()}>Cancel</Button>
          <Button onClick={updateUser}>Subscribe</Button>
        </DialogActions>
      </Dialog>
        </>
    );
}