import api from './api';

export const foodAll = async () => {
  const food = await api.get('/food');
  return food.data;
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
  const food = await api.get(`/food/foodFilter/${ingredient}`).then(response =>response.data).catch(err => err);
  return food;
}

export const filterFoodIngredient = async (product,ingredient) => {
  const food = await api.get(`/food/foodFilterContainIngredient/${product}/${ingredient}`).then(response =>response.data).catch(err => err);
  return food;
}

export const filterFoodNoIngredient = async (product,ingredient) => {
  const food = await api.get(`/food/foodFilterNoContainIngredient/${product}/${ingredient}`).then(response =>response.data).catch(err => err);
  return food;
}