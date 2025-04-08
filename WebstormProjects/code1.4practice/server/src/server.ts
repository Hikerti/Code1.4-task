import express from 'express';
import routes from './routes/routesIndex'
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors({
    origin: process.env.URL_CLIENT || '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use('/api', routes)

export default app;