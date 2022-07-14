import React from 'react';
import { useEffect, useState } from 'react';
import ListFoods from '../../components/List/ListFoods';
import loadFoods from '../../services/provider';

function Provider() {
  const [foods, setFoods] = useState({});
  const [ loading, setLoading ] = useState(true);
  const { getFoods } = loadFoods();
  
  useEffect(() => {
        (async () => {
          const getFoodsFromApi = await getFoods();

          setFoods(getFoodsFromApi);
          setLoading(false);
        })();
      }, []);
    return (
        <>
          <ListFoods foods={foods} loading={loading} />
        </>
    )   
};
export default Provider