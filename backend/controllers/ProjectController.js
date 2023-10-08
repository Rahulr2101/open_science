const User = require('../models/ProjectModel')

module.exports.Create = async (req, res) => {
    try {
        const { ProjectName, Description, Skills, Image } = req.body;
        const userId = req.User._id;

        const project = {
            ProjectName,
            Description,
            Skills,
            Image
        };

        const user = await User.findByIdAndUpdate(
            userId,
            { $push: { projects: project } },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ message: "User not found", success: false });
        }

        res.status(201).json({ message: "Project created successfully", success: true, user });
    } catch (e) {
        console.error(e);
        res.status(400).json({
            message: `There was some error: ${e}`,
            success: false
        });
    }
}

module.exports.View = async (req,res) =>{
    try{
        const userId = req.user._id;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found", success: false });
        }

        const projects = user.projects;

        res.status(200).json({ message: "Projects retrieved successfully", success: true, projects });
    }catch (e){
        res.status(400)
            .json({
                message: `there was some error : ${e}`
            })
    }
}



module.exports.SearchBYSkill = async (req, res) => {
    try {
        const {skill} = req.query;

        if (!skill) {
            return res.status(400).json({message: "Skill parameter is required", success: false});
        }


        const projects = await User.aggregate([
            {
                $unwind: "$projects"
            },
            {
                $match: {
                    "projects.Skills": skill
                }
            },
            {
                $group: {
                    _id: "$_id",
                    projects: {$push: "$projects"}
                }
            },
            {
                $project: {
                    _id: 0,
                    projects: 1
                }
            }
        ]);

        res.status(200).json({message: "Projects retrieved successfully", success: true, projects});
    } catch (e) {
        console.error(e);
        res.status(500).json({message: "error finding projects"});
    }
}

module.exports.SearchByName = async (req, res) => {
    try {
        const { projectName } = req.query;

        if (!projectName) {
            return res.status(400).json({ message: "Project Name parameter is required", success: false });
        }


        const projects = await User.aggregate([
            {
                $unwind: "$projects"
            },
            {
                $match: {
                    "projects.ProjectName": {
                        $regex: new RegExp(projectName, "i")
                    }
                }
            },
            {
                $group: {
                    _id: "$_id",
                    projects: { $push: "$projects" }
                }
            },
            {
                $project: {
                    _id: 0,
                    projects: 1
                }
            }
        ]);

        res.status(200).json({ message: "Projects retrieved successfully", success: true, projects });
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "error retrieving projects" });
    }}
