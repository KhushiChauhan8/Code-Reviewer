require("dotenv").config(); //To load environment variables from .env file

const app = require("./src/app"); //Importing the app instance

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
})