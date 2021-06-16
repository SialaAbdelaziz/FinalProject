const mongoose = require ('mongoose')

const UserSchema = new mongoose.Schema({
   
    name:{
        type: String,
        requierd: true
    },
    password:{
        type: String,
        requierd: true
    },
    email : {
        type : String,
        requierd: true,
        unique: true
    },
    roleType : {
        type: String,
        default: "User",
        enum: ["User","Admin"]
    }
});

module.exports = User = mongoose.model('user',UserSchema);