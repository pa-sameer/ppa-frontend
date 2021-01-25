const express = require('express');
const connection = require('../databaseStepup/config');
const router = express.Router();

router.get('/',(req,res,next) => {
    connection.query('select * from Customers;',(err,result) => {
        if(err){
            throw err;
        }
        else{
            res.status(200);
            res.json(result);
        }
    })
});

module.exports = router;