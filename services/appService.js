import { api } from "./api"

export const storeProducts = async (productData) => {
    try {
        const response = await api.post('/products.json', productData)
        console.log(response.data.name)
    } catch (err) {
        console.log(err)
    }
}

export const getAllProducts = async () => {
    
    try {
        const products = []
        const response = await api.get('/products.json')

        for(key in response.data) {
            const product = {
                ...response.data[key],
                id: key,
            }
            products.push(product)
        }
        return products;
    } catch(err) {
        console.log(err)
    }

}

export const updateProduct = async (token, item) => {
    try {
        const response = await api.put(`/products/${token}.json`, item);
        console.log('Produto atualizado:', response.data);
    } catch (err) {
        console.log('Erro ao atualizar o produto:', err);
        throw err;
    }
};

export const deleteProduct = async (token) => {
    try {
        const response = await api.delete(`/products/${token}.json`)
        console.log(response)
    } catch(err) {
        console.log("ERRO: ", err)
    }
}