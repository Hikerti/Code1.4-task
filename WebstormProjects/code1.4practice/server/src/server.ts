import express from 'express';
import {Request, Response} from 'express';
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
    origin: process.env.URL_CLIENT || '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.get('/', (req: Request, res: Response) => {
    res.status(200).send('Hello World!');
})

app.listen(PORT, () => {
    console.log(`Server started on port http://localhost:${PORT}`);
})