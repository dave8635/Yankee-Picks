const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/health", (req, res) => {
    res.json({
        status: "online",
        app: "Yankee Picks",
        version: "2.0.0"
    });
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
    console.log(`
========================================
Yankee Picks v2
Running at http://localhost:${PORT}
========================================
`);
});