var Express = require("express");
var router = Express.Router();
const projectModel = require("../model/ProjectModel")


router.get("/", async (req,res) => {
    const projects = await projectModel.find({});
    try {
        if (projects.length == 0 ){
            res.json({"error": "no projects found"});
            console.log({"error" : "no projects found"});
            return
        }
        res.json(projects);
    } catch (error) {
        res.status(500).send(error);
    }
});




module.exports = router;