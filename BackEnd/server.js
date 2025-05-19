require("dotenv").config(); //To load environment variables from .env file

const app = require("./src/app"); //Importing the app instance
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});