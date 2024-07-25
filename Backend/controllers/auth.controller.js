
import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
export const signup= async (req,res)=>{
    const {username, email, password}= req.body;
    if(!username || !email || !password || username==='' || email==='' || password === ''){
        return res.status(400).json({error: 'Please fill all the fields!'})
    }
    const hashedPassword= bcryptjs.hashSync(password,10)

    const newUser= new User ({
        
        username,
        email,
        password : hashedPassword,
    });

    try{
    await newUser.save();
    res.json( 'User created successfully!')

    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}