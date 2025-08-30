const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "verysecuresecret";
const app = express();

let users = [];

// middleware that verifies if a user is logged in and ends the request early if the user isn’t logged in.
// used for /me endpoint only 
function auth(req,res,next){
    const token = req.headers.authorization;
    const tokenVerification = jwt.verify(token,JWT_SECRET);
    if(tokenVerification.email){
        req.user = tokenVerification;
        next();
    }
    // token verify ni hua mtlb user logged in nahi hai
    else{
        req.status(404).json({
            msg : "User not logged in"
        });
    }
}

app.use(express.json());
app.use(cors());

app.post('/signup',(req,res)=>{
    const user_email = req.body.email;
    const user_password = req.body.password;

    const user = users.find(u => u.email===user_email);
    if(!user){
        users.push({
            email : user_email,
            password : user_password
        });
        res.status(200).json({
            msg : "User Successfully registered"
        });
    }
    else{
        res.status(409).json({
            msg : "User already registered"
        });
    }
});


app.post('/signin',(req,res)=>{
    const user_email = req.body.email;
    const user_password = req.body.password;
    
    const user = users.find(u => u.email===user_email && u.password===user_password);
    
    if(user){
        const token = jwt.sign({
            email : user_email
        }, JWT_SECRET);
        
        res.status(200).json({
            Token : token
        });
    }
    else{
        res.status(404).json({
            msg : "User not found...Please Register Yourself"
        });
    }
});


app.get('/me', auth, (req,res)=>{
    const user = req.user;
    
    res.send({
        email : user.email
    });
    // const user_token = req.headers.authorization;
    // // anyone can decode jwt token but it can be verified by me only.
    // const decodedInfo = jwt.verify(user_token,JWT_SECRET);
    
    // const userKiEmail = decodedInfo.email;
    // const user = users.find((u) => u.email === userKiEmail);

    // if(user){
    //     res.json({
    //         msg : 'Hey there, you are verified successfully'
    //     });
    // }
    // else{
    //     res.status(404).json({
    //         msg : 'user not found'
    //     });
    // }
});

app.listen(3000);

