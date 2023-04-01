const router = require("express").Router();
let userRegistered = require("../models/userRegistration.model");
const {checkuser } = require('../middelware/authmiddelware');
const jwt = require("jsonwebtoken")
const handleErrors = (err)=>{
    console.log(err.message, err.code);
    let errors = {email: '', password: ""};


    //login- incorrect email
    if(err.message === 'incorrect email'){
        errors.email = 'that email is not registered';
    }

    //login - incorrect password
    if(err.message === 'incorrect password'){
        errors.password = 'that email is not registered';
    }
    //duplicate error code 
    if(err.code === 11000){
        errors.email = 'Email already registered'
        return errors
    }

    //validation errors
    if(err.message.includes('userRegistered validation failed')){
        console.log(err.errors);
        Object.values(err.errors).forEach(({properties}) =>{
            errors[properties.path] = properties.message
        })
    }
    return errors
}

const maxAge = 3* 24*60*60;
const createToken = (id) =>{
    return jwt.sign({ id }, 'net varun secret', {
        expiresIn: maxAge
    });
}
//get 


router.get("/",(req, res) => {
    userRegistered.find().
        then(userData => {
            res.json(userData)
            console.log(userData);
        })
        .catch(err => {
            console.log(err);
        })
})

//signup

router.post("/register",async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    try {
        const newRegistraion =new userRegistered({
            email,
            password
        })
        const users = await newRegistraion.save();
        const token = createToken(users._id);
        res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge *1000})
        res.status(200).json({users})
        console.log(token);
    }
    catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({errors})
    }
}) 


//sign in

router.post("/login",async(req, res) => {
    const {email,password} = req.body;

    try{
        const user = await userRegistered.login(email,password);
        const token = createToken(user._id);
        res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge *1000})
        res.status(200).json({user: user._id})
    }
    catch(err){
        const errors =handleErrors(err)
        res.status(400).json({errors})
    }

})

router.get('/check-user',checkuser)

router.get('/logout',(req,res)=>{
    res.cookie('jwt', '', {maxAge: 1}).json("cookie deleted")
})


module.exports = router;