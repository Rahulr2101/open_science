const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    ProjectName: {
        type: String,
        required: [true, "Project name is required"]
    },
    Description: {
        type: String,
        required: [true, "Project Description is required"]
    },
    Skills: {
        type: [String],
        required: [true, "Skills are required"],
        validate: {
            validator: function (value) {
                return new Set(value).size === value.length;
            },
            message: "Skills must be unique."
        }
    },
    Image:{
        type: String,
        required: [true, "Project Image is required"]
    }
});
