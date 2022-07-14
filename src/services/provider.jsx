import { useState } from 'react';
import  api  from '../api';

const LoadFoods = () =>{
  const [error, setError] = useState('');
  const getFoods = async () => {
      try {
          const post = await api.get('/food');
          console.log(post.data)
          return {data:post.data, message:'Consulta feita com sucesso!'};
      } catch (err) {
          setError(`Houve um problema ao conectar a api.\nErro: ${err}`);
          return {data:false, message:error} 
      }
  }
  return { getFoods };
};

export default LoadFoods;