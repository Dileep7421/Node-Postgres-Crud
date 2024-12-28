const model = require('../models/userModel');

const getAllUsers = async (req, res) => {
    try {
        const users = await model.getUsers();
        res.json(users)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await model.getUserById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const addUser = async (req, res) => {
    const { name, email, age } = req.body;
    try {
        const user = await model.createUser(name, email, age);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;
    try {
        const user = await model.updateUser(id, name, email, age);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await model.deleteUser(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser,
}