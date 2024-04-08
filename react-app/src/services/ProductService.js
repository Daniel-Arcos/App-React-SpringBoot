import axios from "axios"

const initProducts = [
    {
        id: 1,
        name: 'Monitor Samsung',
        price: 500,
        description: 'El monitor es increible!'
    },
    {
        id: 2,
        name: 'iPhon 13',
        price: 14000,
        description: 'El telefono es increible!'
    }
]

const baseUrl = 'http://localhost:8080/products';

export const listProduct = () => {
    return initProducts;
}

export const findAll = async () => {
    try {
        const response = await axios.get(baseUrl);
        return response;
    } catch (error) {
        console.log(error);
    }
    return null;
}

export const create = async ({name, description, price}) => {
    try {
        const response = await axios.post(baseUrl, {
            name,
            description,
            price
        })
        return response;
    } catch (error) {
        console.log(error);
    }
    return undefined;
}

export const update = async ({id, name, description, price}) => {
    try {
        const response = await axios.put(`${baseUrl}/${id}`, {
            name,
            description,
            price
        })
        return response;
    } catch (error) {
        console.log(error);
    }
    return undefined;
}

export const remove = async (id) => {
    try {
        await axios.delete(`${baseUrl}/${id}`);
    } catch (error) {
        console.log(error);
    }
}