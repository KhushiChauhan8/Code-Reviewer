const express = require("express");
const aiRoutes = require("./routes/ai.routes");
const cors = require("cors");

const app = express();  //To Create Server
app.use(cors({
  origin: ['https://code-reviewer-frontend-a552ycxqx-khushi-chauhans-projects.vercel.app']
})); //To allow cross-origin requests

app.use(express.json()); //To parse JSON data from the request body

app.get("/", (req, res) => {
    res.send("Hello World!"); //To send response to the client
})

app.use('/ai', aiRoutes)

module.exports = app; //Exporting the app instance 