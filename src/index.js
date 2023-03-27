import app from './app.js';
import './config.js'
import { PORT } from './config.js';



app.listen(PORT, (req, res) => {
    console.log('Connecting to port', PORT);
})