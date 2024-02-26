// register and login methos
const router= require("express").Router();
const User= require("../models/User");
// for password hashing
const CryptoJs= require("crypto-js");
// json-web-token
const jwt= require("jsonwebtoken")

// REGISTER
router.post("/register", async(req,res)=>{
    const newUser=new User({
        username:req.body.username,
        email:req.body.email,
        password:CryptoJs.AES.encrypt(
          req.body.password,process.env.SECRET_KEY)
        .toString(),
    });
   try{
       const user= await newUser.save();
       res.status(201).json(user)
   } catch (err){
     console.log(err)
   }
});


//LOGIN

router.post("/login",async(req,res)=>{
// we will find user inside a user table and if we dont find user the we send a error
   try{
       const user = await User.findOne({email:req.body.email});
       !user && res.status(401).json("Wrong Password or UserName!")
// if user is alredy register so how we compare the user password with that hashed password which one store in user table
   const bytes=CryptoJs.AES.decrypt(user.password, process.env.SECRET_KEY);
   const originalPassword= bytes.toString(CryptoJs.enc.Utf8);

   // if original password and user typed password were not equal then it will show an error message 
   originalPassword!==req.body.password &&  res.status(401).json("Wrong Password or UserName!");

//    creating a webtoken
    const accessToken=jwt.sign({id: user._id, isAdmin:user.isAdmin},
        process.env.SECRET_KEY,
        // {expiresIn:"5d"}
        );

//it also responses a password with all info so we will not send a password as an response 
const { password, ...info }= user._doc; 

// And if original password and user typed password is equal & we will send only this info not password along with it
  res.status(200).json({...info, accessToken});
   
} catch (err){
     console.log(err)
   }
});

module.exports=router;
