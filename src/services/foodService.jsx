import api from './api';

export const foodAll = async () => {
    const food = await api.get("/food");
    return food.data;
}