const express = require("express");
const app = express();

//const PORT = process.env.PORT || 8080;
const PORT = 3000;
const HOST = "0.0.0.0"

app.get("/", (req, res) => {
    res.send(`<h1>Docker com nodemon e debug!<h1>`);
    console.log(`Request...`);
//     res.send(`
//     <h1>Docker + Node</h1>
//     <span>A match made in the cloud</span>
//   `);
});

app.listen(PORT, HOST, () => {
    console.log(`Server listening on port ${PORT}...`);
});