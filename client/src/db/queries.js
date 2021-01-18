const Pool = require('pg').Pool
const User = require('../models/user')
const validator = require('validator')
const {sendRequestEmail} = require('../emails/account')
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database:'dbname',
    password:'password',
    port:'5133'
})

const readRequest = (req, res)=>{
    pool.query('SELECT * FROM users', (error, results)=>{
        if(error){
            throw error
        }
        res.status(200).json(results.rows)
    })
}


const createRequest = (req, res)=>{
    const {firstname, lastname, email, company, designation, phonenumber, message} = new User(req.body)
    if(!validator.isEmail(email)){
        throw new Error('email is invalid');
    }  
    pool.query('INSERT INTO users (firstname, lastname, email, company, designation, phonenumber, message)VALUES($1, $2, $3, $4, $5, $6, $7)', [firstname, lastname, email, company, designation, phonenumber,message], (error, results)=>{
        
        if(error){
           return res.status(404).send('error')
        }
        res.status(201).send('A Request has sent Successfully!!')
        sendRequestEmail(firstname, lastname, email, company, designation, phonenumber, message)
    })

}

module.exports= {
    readRequest,
    createRequest
}