const dotenv =require('dotenv');
const Connection =require('./database/db.js');
const express = require("express");
const app = express();

dotenv.config({ path: './ab.env' })

const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const movieRoute = require("./routes/movies")
const listRoute = require("./routes/lists")

app.use(express.json())

app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/movies",movieRoute);
app.use("/api/lists",listRoute)


const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME,PASSWORD)

// initializing the port where our server will run 
app.listen(8800,()=>{
    console.log("backend server is running at 8800")
})