import taskService from '../services/tasks'
import { GET_TODOS } from './types'

export const getTodos = () => dispatch => {
    
    taskService.getAll().then(res => {
        console.log(res)
        dispatch({
            type: GET_TODOS,
            payload: res.data
        })
    }).catch(err => console.log(err))
}