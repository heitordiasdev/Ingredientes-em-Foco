import api from './api';

export const usersAll = async () => {
    const users = await api.get("/user");
    return users.data;
}
