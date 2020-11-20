const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

let tenLakhs = 1000000;

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.post('/add',(req,res)=>{
    let num1 = req.body.num1;
    let num2 = req.body.num2;

    let msgResponse = {
        status:"error",
        message:"Invalid data types",
        result: undefined
    }

    if(typeof num1 === "string" || typeof num2 === "string" ){
        
        msgResponse.message = "Invalid data types";
        res.send(msgResponse);
        return;

    }else if (num1 > tenLakhs || num2>tenLakhs || (num1+num2)>tenLakhs){
        
        msgResponse.message = "Overflow";
        res.send(msgResponse);
        return;

    }else if (num1< (tenLakhs * -1) ||num2< (tenLakhs * -1) ||(num1 + num2)< (tenLakhs * -1) ){
        
        msgResponse.message = "Underflow";
        res.send(msgResponse);
        return;
    }else{

        msgResponse.status="success";
        msgResponse.message="the sum of given two numbers";
        msgResponse.result = num1+num2;
        res.send(msgResponse);
        return;

    }
    
})

app.post('/sub',(req,res)=>{

    let num1 = req.body.num1;
    let num2 = req.body.num2;

    let msgResponse = {
        status:"error",
        message:"Invalid data types",
        result: undefined
    }

    if(typeof num1 === "string" || typeof num2 === "string" ){
        
        msgResponse.message = "Invalid data types";
        res.send(msgResponse);
        return;

    }else if (num1 > tenLakhs || num2>tenLakhs || (num1-num2)>tenLakhs){
        
        msgResponse.message = "Overflow";
        res.send(msgResponse);
        return;

    }else if (num1< (tenLakhs * -1) ||num2< (tenLakhs * -1) ||(num1 - num2)< (tenLakhs * -1) ){
        
        msgResponse.message = "Underflow";
        res.send(msgResponse);
        return;
    }else{

        msgResponse.status="success";
        msgResponse.message="the difference of given two numbers";
        msgResponse.result = num1-num2;
        res.send(msgResponse);
        return;

    }

})

app.post('/multiply',(req,res)=>{

    let num1 = req.body.num1;
    let num2 = req.body.num2;

    let msgResponse = {
        status:"error",
        message:"Invalid data types",
        result: undefined
    }

    if(typeof num1 === "string" || typeof num2 === "string" ){
        
        msgResponse.message = "Invalid data types";
        res.send(msgResponse);
        return;

    }else if (num1 > tenLakhs || num2>tenLakhs || (num1*num2)>tenLakhs){
        
        msgResponse.message = "Overflow";
        res.send(msgResponse);
        return;

    }else if (num1< (tenLakhs * -1) ||num2< (tenLakhs * -1) ||(num1 * num2)< (tenLakhs * -1) ){
        
        msgResponse.message = "Underflow";
        res.send(msgResponse);
        return;
    }else{

        msgResponse.status="success";
        msgResponse.message="The product of given numbers";
        msgResponse.result = num1*num2;
        res.send(msgResponse);
        return;

    }

})

app.post('/divide',(req,res)=>{

    let num1 = req.body.num1;
    let num2 = req.body.num2;

    let msgResponse = {
        status:"error",
        message:"Invalid data types",
        result: undefined
    }

    if(typeof num1 === "string" || typeof num2 === "string" ){
        
        msgResponse.message = "Invalid data types";
        res.send(msgResponse);
        return;

    }else if (num2 === 0){

        msgResponse.message = "Cannot divide by zero";
        res.send(msgResponse);
        return;

    }else if (num1 > tenLakhs || num2>tenLakhs || (num1/num2)>tenLakhs){
        
        msgResponse.message = "Overflow";
        res.send(msgResponse);
        return;

    }else if (num1< (tenLakhs * -1) ||num2< (tenLakhs * -1) ||(num1 / num2)< (tenLakhs * -1) ){
        
        msgResponse.message = "Underflow";
        res.send(msgResponse);
        return;
    }else{

        msgResponse.status="success";
        msgResponse.message="The division of given numbers";
        msgResponse.result = num1/num2;
        res.send(msgResponse);
        return;
    }
})


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;