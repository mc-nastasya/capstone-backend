require("dotenv").config();
const express = require('express');
const cors = require("cors");
const axios = require("axios");
const app = express();
const knex = require("knex")(require("./knexfile"));
const crypto = require("crypto");
// const PORT = process.env.PORT;
const PORT = 8080;


app.use(express.json());
app.use(cors());

app.use("/images", express.static("./public/images"));

app.get("/books/book/:id", (req, res)=>{
    knex
        .select("*")
        .from("books")
        .where('id', req.params.id)
        .then((data)=>{
            res.json(data);
        })
})


app.get("/books-preview", (req, res)=>{
    knex
        .select("*")
        .from("books")
        .limit(4)
        .then((data)=>{
            res.json(data);
        })
})

app.get('/books/children', (req, res)=>{
    knex
        .select("*")
        .from("books")
        .where('age', 'children')
        .then((data)=>{
            res.json(data);
        })
})

app.get('/books/young-adult', (req, res)=>{
    knex
        .select("*")
        .from("books")
        .where('age', 'young-adult')
        .then((data)=>{
            res.json(data);
        })
})

app.post("/email", (req,res)=>{

    if(!req.body.email){
        res.status(400).send({error: "Enter email address"})
        return ;
    }

    if(!req.body.email.includes("@")) {
        return res.status(400).json({ error: "not a valid email!" });
    }

    knex('emails')
        .insert([
            { email: req.body.email }
        ]) .then(()=>{
            res.status(201).json("Thanks, add your email");
        })
})

app.post("/contact", (req, res)=>{

    if(!req.body.first_name){
        res.status(400).send({error: "Enter first name"})
        return ;
    }

    if(!req.body.email){
        res.status(400).send({error: "Enter email address"})
        return ;
    }

    if(!req.body.email.includes("@")) {
        return res.status(400).json({ error: "not a valid email!" });
    }


    if(!req.body.subject){
        res.status(400).send({error: "Enter subject"})
        return ;
    }

    if(!req.body.message){
        res.status(400).send({error: "Enter message"})
        return ;
    }

    knex('contact')
        .insert([
            { 
                first_name: req.body.first_name, 
                last_name: req.body.last_name, 
                email: req.body.email, 
                subject: req.body.subject,  
                message: req.body.message
            }
        ]) .then(()=>{
            res.status(201).json("Ok");
        })
    
})

app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`);
})