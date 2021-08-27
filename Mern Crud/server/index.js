import express from 'express';
import cors from 'cors';
import Connection from './database/db.js';
import Routes from './route/routes.js'

const app = express();

app.use(cors());
app.use(express.json( {extended: true}));
app.use(express.urlencoded({ extended: true}));

const PORT = 5000;

app.use('/jobs', Routes);

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})

Connection();

