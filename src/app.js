import express from 'express';
import cors from 'cors';
import translateRoutes from './routes/translateRoutes.js';
import bodyParser from 'body-parser';

const app = express();

app.use(cors({origin: '*'}));
app.use(express.json());
app.use(bodyParser.json());

app.post('/api', translateRoutes);

export default app;