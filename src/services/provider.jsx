import { useState } from 'react';
import  api  from '../api';

const LoadFoods = () =>{
  const [error, setError] = useState('');
  const getFoods = async () => {
      try {
          const post = await api.get('/food');
          console.log(post.data)
          return post.data;
      } catch (err) {
          setError(`Houve um problema ao conectar a api.\nErro: ${err}`);
          return error 
      }
  }
  return { getFoods };
};

export default LoadFoods;