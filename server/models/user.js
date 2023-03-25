import mongoose from "mongoose"

const users = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: 4,
        maxLength: 20
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 16
    }
})


// module.exports = mongoose.model("User", users)
const User = mongoose.model('User', users);

export default User;