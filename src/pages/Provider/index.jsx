import React from 'react';
import { useEffect, useState } from 'react';
import ListFoods from '../../components/List/ListFoods';
// import LoadFoods from '../../services/provider';
import { foodAll }from '../../services/foodService';

function Provider() {
  const [foods, setFoods] = useState({});
  const [ loading, setLoading ] = useState(true);
  // const { getFoods } = LoadFoods.List();
  
  useEffect(() => {
    (async () => {
      const getFoodsFromApi = await foodAll();
      setFoods(getFoodsFromApi);
      setLoading(false)
    })();
  }, []);

    const refresh = async() => {
      setLoading(true)
      const getFoodsFromApi = await foodAll();
      setFoods(getFoodsFromApi);
      setLoading(false)
      console.log('Refresh', loading)
    }
  return (
    <>
      <ListFoods foods={foods} loading={loading} setLoading={refresh} />
    </>
  )   
};
export default Provider