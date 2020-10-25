import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:8000/api'

const getAll = () => {
    console.log('getAll reached')
    const request = axios.get('https://localhost:8000/api/task-list/')
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(BASE_URL + "/task-create", newObject)
    return request.then(response => response.data)
}

export default {
    getAll, create
}
