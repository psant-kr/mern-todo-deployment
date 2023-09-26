import axios from 'axios';
import { ADDNEW_TODO } from './type';

// const API_URL = 'https://localhost:8000';
// const API_URL = 'http://localhost:8000';
const API_URL = 'https://mern-todo-deployment-api.vercel.app';

// axios.defaults.withCredentials = true;

// {
//     "version": 2,
//     "builds": [
//         {
//             "src": "*.js",
//             "use": "@vercel/node"
//         }
//     ],
//     "routes": [
//         {
//             "src": "/(.*)",
//             "dest": "/"
//         }
//     ]
// }

// "source": "/api/(.*)",

export const addNewTodo = (data) => async (dispatch) => {
    
    try {
        const res = await axios.post(`${API_URL}/todos`, { data })
        dispatch({ type: ADDNEW_TODO, payload: res.data });
    } catch (error) {
        console.log('Error while calling addNewTodo API..', error.message);
    }


};