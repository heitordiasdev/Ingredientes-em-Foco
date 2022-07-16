import { useState } from 'react';
import  api  from '../api';

export default {

    List () {
        const getFoods = async () => {
            try {
                const post = await api.get('/food');
                console.log(post.data)
                return {data:post.data, message:'Consulta feita com sucesso!'};
            } catch (err) {
                return {data:false, message:`Houve um problema ao conectar a api.\nErro: ${err}`} 
            }
        }
        return { getFoods };
    },

   async Save (prod) {
        let resp = {data:'Falha', success:false, message:'Error de resp'}
        try {
            const savedFoods = await api.post('/food', prod);
            resp = {data:savedFoods.data, message:'Produto cadastrado com sucesso!', success: true};
        } catch (error) {
            resp = {data:error.response.data, message:'Ops! Não foi possivel cadastrar o produto', success: false};
        }
        return resp
    }
}