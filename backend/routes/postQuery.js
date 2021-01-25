const express = require('express');
const connectionDatabase = require('../databaseStepup/config');
const connection = require('../databaseStepup/config');
const router = express.Router();


const nameRegexp = /^[a-zA-Z0-9_-]*$/;
const phoneNumberRegexp = /^[0-9]*$/;

router.post('/', function(req, res, next) {
  const name = req.body.name;
  const designation = req.body.designation;
  const companyName = req.body.companyName;
  const companyEmail = req.body.companyEmail;
  const contactNumber = req.body.contactNumber;
  const errorMessage = [];

  if(name.length === 0 || name.length > 100){
    errorMessage.push('Input Correct Name.');
  }
  else if(!nameRegexp.test(name)){
     errorMessage.push('Input Correct Name');
  }
 if(designation.length === 0 || designation.length > 100){
    errorMessage.push('Input Correct Designation');
  }
  else if(!nameRegexp.test(designation)){
    errorMessage.push('Input Correct Designation');
  }
  if(companyName.length === 0 || companyName.length > 100){
    errorMessage.push('Input Correct Company Name.');
  }
  else if(!nameRegexp.test(companyName)){
    errorMessage.push('Input Correct Company Name.');
  }
      
  if(companyEmail.length === 0 || companyEmail.length > 100){
    errorMessage.push('Input Correct Company Email Address.');
  }
  if(contactNumber.length != 10){
    console.log(contactNumber.length)
    errorMessage.push('Input Correct Phone Number adfj/.');  
  }

  if(errorMessage.length === 0){
    connection.query('Insert Into Customers (CustomerName, CustomerEmail, CustomerDesign, CustomerCompany, CustomerPhoneNO) Values (?,?,?,?,?);',[name,companyEmail,designation,companyName,contactNumber],(err,result) => {
      if(err){
        res.status(409).json({status: 409, error: err.sqlMessage.split('for')[0]});
      }
      else{
          res.status(200).json({status: 200});
      }
    });
  }
  else {
    res.status(400).json({status:400, error: errorMessage});
  }

});

module.exports = router;
