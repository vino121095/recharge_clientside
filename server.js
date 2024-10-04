const express = require('express');
const cors = require('cors');
const session = require('express-session');
const db = require('./config/db.js');
const upload = require('./config/multerConfig.js');
require('dotenv').config(); 

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(cors());

app.use(
  session({
    secret: process.env.ACCESS_SECRET_TOKEN, 
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } 
  })
);

(async()=>{
        await db.sync();
        console.log('Table created successfully')
    })();

// Root route
app.get('/', (req, res) => {
  res.send('Welcome');
});

app.post('/', (req, res) => {
  res.send('Post request submitted');
});

//Admin Route
const adminRoutes = require ('./routes/adminRoutes');
app.use('/api', adminRoutes);

//User Route
const userRoutes = require ('./routes/userRoutes');
app.use('/api', userRoutes);

//Operator Route
const operatorRoutes = require ('./routes/operatorRoutes');
app.use('/api', operatorRoutes);

//PlanList Route
const planListRoutes = require ('./routes/planListRoutes');
app.use('/api', planListRoutes);

//Add_Category Route
const addCategoryRoutes = require ('./routes/addCategoryRoutes');
app.use('/api', addCategoryRoutes);

// Home_Data Route
const homeDataRoutes = require('./routes/homeDataRoutes');
app.use('/api', homeDataRoutes);

// Listen on the port from the .env file
const PORT = process.env.SERVER_PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
