const express = require('express');
const cors = require('cors');
const genl_routes = require('./router/general.js').general;

const app = express();

app.use(cors());
app.use(express.json());


const PORT = 5000;
app.use("/", genl_routes);
app.listen(PORT, ()=>console.log("Server is running"));