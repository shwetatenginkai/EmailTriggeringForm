const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const { response } = require('express');
const requestrouter = require('./client/src/routers/request')
const portgredb = require('./client/src/db/queries')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(requestrouter)

app.get('/', ()=>{
    resizeBy.send('Welcome to my forms')
})



        const PORT = process.env.PORT|| 3001;
        app.listen(PORT,()=>{
            console.log(`server starting at port ${PORT}`);
        })
    
