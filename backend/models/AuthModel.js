const mongoose = require("mongoose");
const projectSchema = require('./ProjectModel')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Your email address is required"],
        unique: true,
    },
    username: {
        type: String,
        required: [true, "Your username is required"],
    },
    password: {
        type: String,
        required: [true, "Your password is required"],
    },
    userType: {
        type: String,
        enum: ["projectCreator", "contributor"],
        required: true,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    projects: [projectSchema],
});

module.exports = mongoose.model("User", userSchema);