import { Box } from '@mui/material';
import React from 'react';
import { useEffect, useState } from 'react';
import ListFoods from '../../components/List/ListFoods';
import { filterFoodByUser }from '../../services/foodService';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';

function Provider() {
  const [foods, setFoods] = useState({});
  const [ loading, setLoading ] = useState(true);
  const auth = useContext(AuthContext)
  
  useEffect(() => {
    (async () => {
      const getFoodsFromApi = await filterFoodByUser(auth.user.id);
      setFoods(getFoodsFromApi);
      setLoading(false)
    })();
  }, []);

    const refresh = async() => {
      setLoading(true)
      const getFoodsFromApi = await filterFoodByUser(auth.user.id);
      setFoods(getFoodsFromApi);
      setLoading(false)
      console.log('Refresh', loading)
    }
  return (
    <Box sx={{backgroundColor:'#0000001C'}}>
      <ListFoods foods={foods} loading={loading} setLoading={refresh} />
    </Box>
  )   
};
export default Provider