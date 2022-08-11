const express = require('express');
const bcrypt = require('bcrypt'); 

const router = express.Router();

const users = [];

router.post('/signup', (req, res) => {
    try {
    const { username, password, email } = req.body;
    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, function(err, hash){
    hashedPassword = hash
 });

 let newUser = {
    username,
    password: hashedPassword,
    email
 }

 users.push(newUser);
 console.log(users)
 res.sendStatus(201).json(newUser); 


    } catch (error) {
       res.sendStatus(400).json(error) 
    }
})

router.post('/login', (req, res) => {
    

})


module.exports = router