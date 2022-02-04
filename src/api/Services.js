var Express = require("express");
var router = Express.Router();
const serviceModel = require("../model/ServicesModel")


router.get("/", async (req,res) => {
    const Services = await serviceModel.find({});
    try {
        if (Services.length == 0 ){
            res.json();
            console.log({"error" : "no services found"});
            return
        }
        console.log(Services)
        res.json(Services);
    } catch (error) {
        res.status(500).send(error);
    }
});




module.exports = router;