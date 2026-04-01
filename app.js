const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/authors', require('./routes/authorRoutes'));
app.use('/api/books', require('./routes/bookRoutes'));
app.use('/api/students', require('./routes/studentRoutes'));
app.use('/api/attendants', require('./routes/attendantRoutes'));

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});



