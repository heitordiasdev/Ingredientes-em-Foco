import api from './api';

export const foodAll = async () => {
    const food = await api.get("/food");
    return food.data;
}

export const foodName = async (name) => {
    const food = await api.get(`/food/${name}`);
    return food.data;
}