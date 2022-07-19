import React from 'react';
import { useEffect, useState } from 'react';
import ListFoods from '../../components/List/ListFoods';
import LoadFoods from '../../services/provider';
// import { foodAll }from '../../services/foodService';

function Provider() {
  const [foods, setFoods] = useState({});
  const [ loading, setLoading ] = useState(true);
  const { getFoods } = LoadFoods.List();
  
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