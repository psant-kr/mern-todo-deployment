import axios from 'axios';
import { ADDNEW_TODO } from './type';

// const API_URL = 'https://localhost:8000';
// const API_URL = 'http://localhost:8000';
const API_URL = 'https://mern-todo-deployment-api.vercel.app';

// axios.defaults.withCredentials = true;

export const addNewTodo = (data) => async (dispatch) => {
    axios.defaults.withCredentials = true;
    try {
        const res = await axios.post(`${API_URL}/todos`, { data })
        dispatch({ type: ADDNEW_TODO, payload: res.data });
    } catch (error) {
        console.log('Error while calling addNewTodo API..', error.message);
    }


};