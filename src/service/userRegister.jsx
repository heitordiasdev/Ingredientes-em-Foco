import api from "./api";

export const createUser = async (name, cpfCnpj, email, password, dateNasc) => {
    const users = await api.post("/user", {name, cpfCnpj, email, password, dateNasc});
    return users.data;
};