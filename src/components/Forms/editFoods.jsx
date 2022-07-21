import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContentText from '@mui/material/DialogContentText';
import DialogContent from '@mui/material/DialogContent';
import { Box, Dialog } from '@mui/material';
import { useState, useEffect } from 'react';
import LoadFoods from '../../services/provider';


function DialogEditProd(props) {

  // const [erows, setRows] = useState([ { name:'', quantity:'', vd:''}, ...item.infoNutritional]);
  const [erows, setRows] = useState([
    { name:'', quantity:'', vd:''}
  ]);
  const  { open, setOpen, message, item } = props;
  const [error, setError] = useState('')
  const [newName, setName] = useState('')
  const [newManufacture, setManufacture] = useState('')
  const [newIngredients, setIngredients] = useState('')
  const [newIngredientsCheck, setIngredientsCheck] = useState([])
  
  // useEffect(() => {
  //   console.log('Props', props)
  //   console.log('error', error)
  //   console.log('newName', newName)
  //   console.log('newManufacture', newManufacture)
  //   console.log('newIngredients', newIngredients)
  //   console.log('newIngredientsCheck', newIngredientsCheck)
  //   setName(item.name)
  //   setManufacture(item.manufacture)
  //   setIngredients(item.ingredients)
  //   setIngredientsCheck(item.ingredientsCheck)
  //   setRows([...erows, { name:'', quantity:'', vd:''}])
  // }, []);

  useEffect(() => {
    console.log('item', props)
    setName(item.name)
    setManufacture(item.manufacturer)
    setIngredients(item.ingredients)
    setIngredientsCheck(item.ingredientsCheck)
    setRows([...erows, { name:'', quantity:'', vd:''}])
    // setRows([ ...item.infoNutritional.info, { name:'', quantity:'', vd:''}])
  }, [open, setOpen, message, item])
  
  const addRow = (index) => {
    setRows([...erows, { name:'', quantity:'', vd:''}])
  }

  const changeFields = (index, event) => {
      const data = [...erows];
      data[index][event.target.name] = event.target.value;
      setRows(data);
  }

  const changeName = (data) => {
      setName(data.target.value);
  }

  const changeManufacture = (data) => {
    setManufacture(data.target.value);
  }

  const changeIngredients = (data) => {
    setIngredients(data.target.value);
  }

  const cleanError = () => {
    setError('');
  }

  const handleChangeIngredients = (data) => {
    console.log('Check', data)
    setIngredientsCheck(data.target.value)
  }

  const updateProduct = async ()=> {
    console.log('item edit',item)
    const product = { name:newName, manufacturer:newManufacture, ingredients:newIngredients, infoNutritional:JSON.stringify(erows)}
    const saveFoodResp = await LoadFoods.Update(product, item.id);
    console.log('Response',saveFoodResp)
    if(saveFoodResp.success){
      message(saveFoodResp.message)
      setOpen(false)
    } else {
      setError(saveFoodResp.data)
    }
  }

  const closeDialog = () =>{
    setName('');
    setManufacture('');
    setIngredients('');
    setRows([
      { name:'', quantity:'', vd:''}
    ]);
    setOpen(false);
  }

  const columns = [
    { field: 'name', headerName: 'Nome', width: 200, editable: true },
    { field: 'quantidade', headerName: 'Quantidade', width: 90, editable: true },
    { field: 'vd', headerName: 'Vd%', width: 90, editable: true }
  ];
  
  return (
    <Dialog open={open}>
      <DialogTitle>Editar Produto</DialogTitle>
      {error.length>0?(
        <DialogContentText onClick={()=>cleanError()} sx={{ color: '#E52928' ,alignSelf: 'center'}}>{error}</DialogContentText>
      ):(<></>)}
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Nome"
          type="text"
          value={newName}
          fullWidth
          variant="filled"
          onChange={event=>(changeName(event))}
        />
        <TextField
          autoFocus
          margin="dense"
          id="manufacture"
          label="Fabricante"
          type="text"
          value={newManufacture}
          fullWidth
          variant="filled"
          onChange={event=>(changeManufacture(event))}
        />
        <TextField
          autoFocus
          margin="dense"
          id="ingredients"
          label="Ingredientes"
          type="text"
          fullWidth
          variant="filled"
          value={newIngredients}
          onChange={event=>(changeIngredients(event))}
        />
        <Box sx={{ height: 400, width: '100%' }}>
          <table>
            <thead>
              <div style={{display:'flex' , width:'max-content', margin:'15px'}}>
                <h3>Informações Nutricionais</h3>
              </div>
              <tr>
                { columns.map((col)=>(
                  <th style={{ width:col.width}}>{col.headerName}</th>
                  )) }
                  <th>
                    <Button sx={{color: '#E52928'}} onClick={ ()=> addRow() }>Add +</Button>
                  </th>
              </tr>
            </thead>
            <tbody>
                { erows.map(( row, index)=>(
                  <tr key={index}>
                    <td>
                      <TextField
                        autoFocus
                        name='name'
                        margin="dense"
                        value={row.name}
                        type="text"
                        variant="filled"
                        onChange={event=>(changeFields(index, event))}
                      />
                    </td>
                    <td>
                      <TextField
                        name='quantity'
                        autoFocus
                        margin="dense"
                        value={row.quantity}
                        type="text"
                        variant="filled"
                        onChange={event=>(changeFields(index, event))}

                      />
                    </td>
                    <td>
                      <TextField
                        autoFocus
                        name='vd'
                        margin="dense"
                        value={row.vd}
                        type="text"
                        variant="filled"
                        onChange={event=>(changeFields(index, event))}
                      />
                    </td>
                  </tr>
                  ))}
            </tbody>
          </table>
        </Box>
        <Button sx={{color: '#E52928'}} onClick={ ()=> addRow() }>Add +</Button>
      </DialogContent>
      <DialogActions>
        <Button sx={{color: '#E52928'}} onClick={()=>closeDialog()}>Cancelar</Button>
        <Button sx={{color: '#E52928'}} onClick={ ()=> updateProduct() }>Salvar</Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogEditProd 
