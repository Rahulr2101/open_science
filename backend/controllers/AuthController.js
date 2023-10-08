const User = require("../models/AuthModel");

module.exports.Signup = async (req,res) => {
    try {
        const { email, password, username, userType, createdAt } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({ message: "User already exists" });
        }
        const user = await User.create({ email, password, username, userType, createdAt });
        res
            .status(201)
            .json({ message: "User signed up successfully", success: true, user });
    } catch (error) {
        console.error(error);
    }
}

module.exports.Login = async (req,res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.json({ message: 'All fields are required' });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ message: 'Incorrect password or email' });
        }

        if ((password) != (user.password)) {
            return res.json({ message: 'Incorrect password or email' });
        }
        res.status(201).json({ message: "User logged in successfully", success: true });
    } catch (error) {
        console.error(error);
    }
}