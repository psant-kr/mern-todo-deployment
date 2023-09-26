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

// {
//     "headers": [
//         {
//             "source": "/(.*)",
//             "headers": [
//                 {
//                     "key": "Access-Control-Allow-Credentials",
//                     "value": "true"
//                 },
//                 {
//                     "key": "Access-Control-Allow-Origin",
//                     "value": "https://mern-todo-deployment-frontend.vercel.app"
//                 },
//                 {
//                     "key": "Access-Control-Allow-Methods",
//                     "value": "GET,OPTIONS,PATCH,DELETE,POST,PUT"
//                 },
//                 {
//                     "key": "Access-Control-Allow-Headers",
//                     "value": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
//                 }
//             ]
//         }
//     ]
// }

export const addNewTodo = (data) => async (dispatch) => {
    
    try {
        const res = await axios.post(`${API_URL}/todos`, { data })
        dispatch({ type: ADDNEW_TODO, payload: res.data });
    } catch (error) {
        console.log('Error while calling addNewTodo API..', error.message);
    }


};