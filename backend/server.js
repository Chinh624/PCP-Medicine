require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const router = require("./src/routes/routes");
const configureMiddleware = require('./src/middlewares/middlewares')

// Middleware
configureMiddleware(app);

// Routes
app.use(router);


    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
