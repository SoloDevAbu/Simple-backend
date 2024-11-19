const Users = require("../models/userModel")

const getUsers = async (req, res) => {
    try {
        const users = await Users.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            msg: error.msg
        })
    }
}

const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await Users.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({
            msg: error.msg
        })
    }
}

const createUser = async (req, res) => {
    try {
        const user = await Users.create(req.body)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({
            msg: error.msg
        })
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await Users.findByIdAndUpdate(id, req.body);

        if (!user) {
            res.status(404).json({
                msg: "User not found"
            })
        }

        const updateduser = await Users.findById(id);
        res.status(200).json(updateduser);

    } catch (error) {
        res.status(500).json({
            msg: error.msg
        })
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await Users.findByIdAndDelete(id);

        if (!user) {
            return res.status(400).json({
                msg: "user not found"
            })
        }

        res.status(200).json({
            msg: "User deleted"
        })
    } catch (error) {
        res.status(500).json({
            msg: error.msg
        })
    }
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
};