import app from './app.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.APP_PORT || 3001;

app.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}`);
});