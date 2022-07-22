import React, { useEffect, useState } from 'react';
import ListFoods from '../../../components/List/ListFoods';
import { foodAll } from '../../../services/foodService';

export default function ProductAdmin() {
    const [food, setFood] = useState([]);
    const [ loading, setLoading ] = useState(true);
  
    useEffect(() =>{
      async function loadFood(){
        const response = await foodAll();
        setFood(response)
        setLoading(false)
      }
      loadFood();
    },[]);

    const refresh = async() => {
      setLoading(true)
      const getFoodsFromApi = await foodAll();
      setFood(getFoodsFromApi);
      setLoading(false)
      console.log('Refresh', loading)
    }
  
      return(
        <>
          <ListFoods foods={food} loading={loading} setLoading={refresh} />
        </>
      );
  };