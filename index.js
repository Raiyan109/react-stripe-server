const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const stripe = require('stripe');
require('dotenv').config()


const app = express()

app.use(express.json())
app.use(cors())


// Routes
app.get('/', (req, res) => {
    res.json({ msg: 'server running on React Stripe project' })
})



// Listen
app.listen(5000, console.log('sever running at react stripe server'))

