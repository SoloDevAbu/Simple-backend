const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
    {
        userName: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true,
        },
        number: {
            type: Number,
            require: true,
            default: 0
        },
        
    },
    {
        timestamps: true
    }
);

const Users = mongoose.model("UserDetails", UserSchema);
module.exports = Users;