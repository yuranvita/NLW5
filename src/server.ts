import express from 'express';

import {routes} from './routes';
import "./database";

const app = express();
app.use(express.json());
app.use(routes);
const port = 3333;

app.listen(port , () => {console.log(`server is running on ${port} `)});


