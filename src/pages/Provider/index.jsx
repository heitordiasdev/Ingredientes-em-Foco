import React from 'react';
import { useEffect, useState } from 'react';
import ListFoods from '../../components/List/ListFoods';
import loadFoods from '../../services/provider';

function Provider() {
  const [foods, setFoods] = useState({});
  const { getFoods } = loadFoods();
  
  useEffect(() => {
        (async () => {
          const getFoodsFromApi = await getFoods();

          setFoods(getFoodsFromApi);
          console.log('ApiFoods', getFoodsFromApi);
          console.log('Foods', foods);
        })();
      }, []);
    return (
        <>
          <ListFoods foods={foods} />
        </>
    )   
};
export default Provider