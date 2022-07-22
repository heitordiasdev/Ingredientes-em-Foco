import api from './api';

export const foodAll = async () => {
  const food = await api.get('/food');
  return food.data;
};

export const newFood = async (product) => {
  try {
    const food = await api.post('/food', product);
    return {success:true, data:food.data, message:'Produto cadastrado com sucesso!'};
  } catch (error) {
    return {success:false, data:null, message:'Não foi possivel cadastrar o produto'};
  }
};

export const deleteFood = async (id) => {
  console.log('Route delete', id)
  try {
    const food = await api.delete("/food/".concat(id));
    return {success:true, data:food.data, message:'Produto deletado com sucesso!'};
  } catch (error) {
    return {success:false, data:null, message:'Não foi possivel deletar o produto'};
  }
};

export const updateFood = async (prod, id) => {
  try {
    const food = await api.put("/food/".concat(id), prod);
    return {success:true, data:food.data, message:'Produto atualizado com sucesso!'};
  } catch (error) {
    return {success:false, data:null, message:'Não foi possivel atualizar o produto'};
  }
};

export const filterIngredient = async (ingredient) => {
  const food = await api.get(`/food/filterContainIngredient/${ingredient}`).then(response =>response.data).catch(err => err);
  return food;
}

export const filterNoIngredient = async (ingredient) => {
  const food = await api.get(`/food/filterNoContainIngredient/${ingredient}`).then(response =>response.data).catch(err => err);
  return food;
}

export const filterFood = async (ingredient) => {
  const food = await api.get(`/foodFilter/${ingredient}`).then(response =>response.data).catch(err => err);
  return food;
}

export const filterFoodIngredient = async (product,ingredient) => {
  const food = await api.get(`/foodFilterContainIngredient/${product}/${ingredient}`).then(response =>response.data).catch(err => err);
  return food;
}

export const filterFoodNoIngredient = async (product,ingredient) => {
  const food = await api.get(`/foodFilterNoContainIngredient/${product}/${ingredient}`).then(response =>response.data).catch(err => err);
  return food;
}