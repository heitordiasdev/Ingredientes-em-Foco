import api from "./api";

export const createUser = async (name, cpfCnpj, email, password, dateNasc, typeUser=false) => {
    const users = await api.post("/user", {name, cpfCnpj, email, password, dateNasc, typeUser});
    return users.data;
};