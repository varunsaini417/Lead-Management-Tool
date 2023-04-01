const jwt = require('jsonwebtoken');
const userRegistered = require("../models/userRegistration.model")
const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    //check json web token exists & is verified

    if (token) {
        jwt.verify(token, 'net varun secret', (err, decodeToken)=>{
            if (err) {
                console.log(err.message);
                next()
            } else {
                // console.log(decodeToken);
                next();
            }
        })
    } else {
        res.status(400).json({unauthorized: true})
        next()
    }
}

//check current user
const checkuser = (req,res,next)=>{
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, 'net varun secret', async(err, decodeToken)=>{
            if (err) {
                console.log(err.message);
                
                next()
            } else {
                // console.log(decodeToken);
                let user = await userRegistered.findById(decodeToken.id)
                res.status(200).json({isUser: true})
                
                next()
            }
        })
    } else {
        res.status(400).json({isUser: false})
        
    }
}


module.exports = {requireAuth,checkuser};