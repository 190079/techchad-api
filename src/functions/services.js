var Express = require("express");
var router = Express.Router();
const serviceModel = require("../model/services")


router.get("/", async (req,res) => {
    const services = await serviceModel.find({});
    try {
        console.log(services);
        res.json(services);
    } catch (error) {
        res.status(500).send(error);
    }
});




module.exports = router;