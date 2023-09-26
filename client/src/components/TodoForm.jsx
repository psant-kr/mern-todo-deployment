import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewTodo } from '../redux/actions';
import axios from 'axios';

const TodoForm = () => {
    // eslint-disable-next-line
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    axios.defaults.withCredentials = true;

    const onFormSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewTodo(text));

        setText('');
    };

    const onFormChange = (e) => {
        // console.log(e.target.value);
        setText(e.target.value);
    };


    return (
        <form
            onSubmit={onFormSubmit}
            className='form'
        >
            <input
                onChange={onFormChange}
                className='input'
                type="text"
                value={text}
                placeholder='Enter new todo...' />
        </form>
    )
}

export default TodoForm