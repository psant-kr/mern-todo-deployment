import mongoose from "mongoose";
// import dotenv from 'dotenv';

// dotenv.config();

// const USERNAME=process.env.DB_USERNAME;
// const PASSWORD=process.env.DB_PASSWORD;

const Connection = () => {

    const MONGODB_URI = `mongodb+srv://prashant:prashant@todo.epvkfbi.mongodb.net/test?retryWrites=true&w=majority`;

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('Database connected sucessfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database', error.message);
    })
}

export default Connection;