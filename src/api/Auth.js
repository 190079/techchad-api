var Express = require("express");
var router = Express.Router();
const UserModel = require("../model/userModel");


router.post("/register", async (req,res) => {
    const projects = await UserModel.find({});
    try {
        const {username,password,fullname,email,phone} = req.body;
        if(!(email && username && password && fullname)){
            res.status(400).send("All Fields are Required.");
        }
        const oldUsers = await UserModel.findOne({username});
        if(oldUsers){
            return res.status(409).send("User Already Exist. Please Login");
        }
      const encryptedPassword = await bcrypt.hash(password, 10);
      const user = await UserModel.create({
          username: username.toLowerCase(),
          email: email.toLowerCase(),
          phone: phone,
          fullname: fullname,
          password: encryptedPassword,
          
      });

      const token = jwt.sign(
          {user_id: user._id, username}, process.env.TOKEN_KEY, {
              expiresIn: "2h",
          }
      )

      user.token = token;
      res.status(201).json(user);

    } catch (err) {
        console.log(err);
      }
});

router.post("/login",(req,res)=>{
    try{
        const {username,password} = req.body;

        if (!(username,password)) {
            res.status(400).send("All input is required");
        }
        const user = await UserModel.findOne({username});
        if (user && (await bycrypt.compare(password, user.password))){
            const token = jwt.sign(
                {user_id: user._id,user },
                process.env.TOKEN_KEY,
                {expiresIn : "2h"}
            )
            user.token = token;
            res.status(200).json(user);

        };
    res.status(400).send("Invalid Credentials");
    } catch(error) {
        console.log(error);
    }
})




module.exports = router;