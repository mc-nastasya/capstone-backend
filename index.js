const express = require('express');
const cors = require("cors");
const app = express();
const knex = require("knex")(require("./knexfile"))
const PORT = 8080;

app.use(express.json());
app.use(cors());

app.use("/images", express.static("./public/images"));


app.get("/books", (req, res)=>{
    knex
        .select("*")
        .from("books")
        .limit(4)
        .then((data)=>{
            res.json(data);
        })
})

app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`);
})