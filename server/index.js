import express, { json } from 'express';
import connectDB from "./config/db.js";

import authRoute from './routes/auth.js';

const app = express()
app.use(json());
connectDB();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api/v1/auth', authRoute); 

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)})