const express = require('express');
const connectDB = require('./db/connect');
require('dotenv').config();


//routes import
const userRoutes = require('./routes/users')

//middleware imports
const authentication = require('./middleware/authentication');
const errorHandler = require("./middleware/error-handler");

const app = express();


//middlewares
app.use(express.json());

app.use(authentication);
app.use(errorHandler);

//routes
app.use('/api/v1/auth',userRoutes)

let port = process.env.PORT || 5000;
const startApp = () => {
    try{
        connectDB(process.env.DB_URL)
        .then(() => {
            console.log("Connected to database Successfully !");
            app.listen(port, () => {
                console.log(`Listening on ${port}`);
            })
        });

    }catch(err) {
        console.log(err);
    }
}

startApp();