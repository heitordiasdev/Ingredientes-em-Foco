import React, { useState } from "react";
import { updateUser } from "../../services/userService";
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";


export default function EditUser(props) {
  const { open, setOpen, user } = props;
  const [newName, setName] = useState(user.name)
  const [newCpfCnpj, setCpfCnpj] = useState(user.cpfCnpj)
  const [newEmail, setEmail] = useState(user.email)
  const [newPassword, setPassword] = useState('12345678')
  const [newDateNasc, setDateNasc] = useState(user.dateNasc)
    


    const editUser = async () => {
      console.log(user.id, newName, newCpfCnpj, newEmail, newPassword, newDateNasc)
        await updateUser(user.id, newName, newCpfCnpj, newEmail, newPassword, newDateNasc)
        setOpen(false)
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
            type="text"
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
          <Button sx={{backgroundColor:'#E52928','&:hover': {backgroundColor: '#F03F4E',},}} onClick={() => closeDialog()}>Cancel</Button>
          <Button sx={{backgroundColor:'#52691F','&:hover': {backgroundColor: '#618A2E',},}} onClick={editUser}>Update</Button>
        </DialogActions>
      </Dialog>
        </>
    );
}