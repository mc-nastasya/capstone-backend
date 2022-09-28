require("dotenv").config();
const jwt = require('jsonwebtoken');
const express = require('express');
const cors = require("cors");
const axios = require("axios");
const app = express();
const knex = require("knex")(require("./knexfile"));
const PORT = process.env.PORT;
const JWT_KEY = process.env.JWT_KEY;
const bcrypt = require('bcrypt');
const saltRounds = 10;



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

app.get('/faq', (req, res)=> {
    knex
        .select("*")
        .from("faq")
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


app.post('/login', (req, res)=>{
    const {username, password} = req.body;

    knex
        .select("*")
        .from("admin")
        .then((data)=>{
            return user = data[0];
        })
        .then((user)=>{
            if(username === user.username){
                bcrypt.compare(password, user.password, (err, result)=>{
                    if(result) {
                        res.status(200).json({token: jwt.sign({username: username}, JWT_KEY)});
                    } else {
                        res.status(403).json({token: '', error: {message:"Error logging in. Invalid username/password combination."}})
                    }
                })
            }
            else {
                res.status(403).json({token: '', error: {message:"Error logging in. Invalid username/password combination."}})
            }
        })
})

app.post('/add-book', (req, res)=>{
    if(!req.body.title){
        res.status(400).send({error: "Enter title"})
        return ;
    }

    if(!req.body.description){
        res.status(400).send({error: "Enter description"})
        return ;
    }

    if(!req.body.amazon_link){
        res.status(400).send({error: "Enter amazon link"})
        return ;
    }

    knex("books")
    .insert([
        { 
            title: req.body.title, 
            description: req.body.description, 
            amazon_link: req.body.amazon_link, 
            age: req.body.age,
            image: "http://localhost:8080/images/default.jpg",
            sample_link: "/Pdf-sample.pdf"  
        }
    ]) .then(()=>{
        res.status(201).json("Ok");
    })
})

app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`);
})