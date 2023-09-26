import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import Routes from './routes/route.js';

const app = express();

app.use(cors(
    // {
    //     origin: ["https://mern-todo-deployment-frontend.vercel.app"],
    //     methods: ["POST", "GET"],
    //     credentials: true,
    // }
));

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', Routes);

// const PORT = 8000;
const port = process.env.PORT || 8000;

Connection();

app.listen(port, () => console.log(`Your server is running sucessfully on PORT ${PORT}`));