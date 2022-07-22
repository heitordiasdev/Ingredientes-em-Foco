import api from './api';

export const usersAll = async () => {
    const users = await api.get("/user");
    return users.data;
}

export const userId = async (id) => {
    const user = await api.get(`/user/${id}`).then(response => response.data).catch(err => err);
    return user
}

export const deleteUser= async (id) => {
    const user = await api.delete(`/user/${id}`).then(response => response.data).catch(err => err);
    return user
}

export const loginUser = async (email, password) => {
    const user = await api.post("/user/authenticate", {email, password}).then(response => response.data).catch(err => err);
    return user;
}

export const createUser = async (name, cpfCnpj, email, password, dateNasc, typeUser=false) => {
    const users = await api.post("/user", {name, cpfCnpj, email, password, dateNasc, typeUser});
    return users.data;
};

export const updateUser = async (id, name, cpfCnpj, email, password, dateNasc, typeUser=false) => {
    const user = await api.put(`/user/${id}`, {name, cpfCnpj, email, password, dateNasc, typeUser}).then(response => response.data).catch(err => err);
    return user;
}