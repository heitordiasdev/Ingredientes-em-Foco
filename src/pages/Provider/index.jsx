import React from 'react';
import { useEffect, useState } from 'react';
import ListFoods from '../../components/List/ListFoods';
import loadFoods from '../../services/provider';

function Provider() {
  const [foods, setFoods] = useState(null);
  useEffect((foods) => {
    const { getFoods } = loadFoods();
        (async () => {
          const getFoodsFromApi = await getFoods();

          setFoods(getFoodsFromApi);
          console.log('Foods from API', getFoodsFromApi);
          console.log('Foods', foods);
        })();
      }, []);
    return (
        <>
          <ListFoods data={foods} />
        </>
    )   
};
export default Provider