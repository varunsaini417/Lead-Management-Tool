const mongoose = require("mongoose");
const {isEmail} =require("validator")
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema;

const userRegisteration = new Schema({
    email: {
        type: String, 
        required:[true, "Please enter an email"], 
        lowercase: true,
        validate:[isEmail, 'Please Enter a valid email ']
    },
    password:{
        type:String, 
        required: [true, 'Please enter a password'],
        minlength: [6, 'Min password length is 6 chracters']
    }
    
},{
    timestamps:true
})

//hashing password

userRegisteration.pre('save',async function (next){
    const salt = await bcrypt.genSalt()
    this.password= await bcrypt.hash(this.password, salt);
    
    next();
})


//static method to login user
userRegisteration.statics.login = async function(email, password){
    const user = await this.findOne({email});
    if(user){
        const auth = await bcrypt.compare(password, user.password)
        if(auth){
            return user;
        }
        throw Error("incorrct password")
    }
    throw Error("incorrect email");
}

const userRegistered = mongoose.model("userRegistered", userRegisteration);
module.exports = userRegistered;