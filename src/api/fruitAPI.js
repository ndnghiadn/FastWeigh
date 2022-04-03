import axiosClient from './axiosClient'

const fruitAPI = {
    getAll() {
        return axiosClient.get('/fruit/getAll')
    },
    addQuantity(name) {
        return axiosClient.post(`/fruit/addQuantity/${name}`)
    },
    editPrice(name) {
        return axiosClient.post(`/fruit/editPrice/${name}`)
    },
    delete(name) {
        return axiosClient.post(`/fruit/delete/${name}`)
    }
}

export default fruitAPI