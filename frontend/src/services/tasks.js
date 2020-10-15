import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:8000/api'

const getAll = () => {
    const request = axios.get(BASE_URL)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(BASE_URL+ "/task-create", newObject)
    return request.then(response => response.data)
}

export default {
    getAll, create
}
