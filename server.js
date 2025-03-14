require ('dotenv').config();
require ('./db/dbConnect.js');

const express = require('express');
const cors = require('cors');

const app = express();

const corsOpts = {
    origin: '*',
    methods: ['GET', 'POST'],
};

app.use(cors(corsOpts));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => res.send(`SERVER RUNNING ON PORT ${PORT}`));

const schoolRoutes = require('./routes/school.route.js'); 
app.use('/', schoolRoutes);

app.listen(PORT, () => console.log(`SERVER IS UP, LISTENING ON PORT ${PORT}`));
