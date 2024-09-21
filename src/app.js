const express = require("express");

const app = express();

app.use("/test", (req, res) => {
    res.send("Namaste from the server");
});

app.listen(1512, () => {
    console.log("Server is successfullu listening on port 1512...");
});