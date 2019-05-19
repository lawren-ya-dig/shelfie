const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const massive = require('massive');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
    .then((dbInstance)=>{
        app.set('db', dbInstance)
        console.log('database connected')
    })

    // app.get('/api/inventory', (req, res, next)=>{
    //     const db = req.app.get('db');
    //     db.GET_INVENTORY()
    //         .then(inventory => {
    //             res.send(inventory.data)
    //         })
    // })





const port = process.env.PORT || 8000
app.listen(port, ()=>{
    console.log(`running on port ${port}`)
})