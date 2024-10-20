import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";


export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    
    if (!username || !email || !password || username === '' || email === '' || password === '') {
        return next(errorHandler(400, 'All fields are required')); 
    }
    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
        username,
        email,
        password: hashedPassword,
    });

    try {
        await newUser.save();
        res.status(201).json('User created successfully!');  // Ensure status code for creation
    } catch (err) {
        next(err);
    }
};

export const signin = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password || email === '' || password === '') {
        return next(errorHandler(400, 'All fields are required'));
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return next(errorHandler(404, 'Invalid email or password'));
        }

        const isValidPassword = bcryptjs.compareSync(password, user.password);
        if (!isValidPassword) {
            return next(errorHandler(400, 'Invalid email or password'));
        }

        const token = jwt.sign({ userId: user._id, isAdmin : user.isAdmin }, process.env.SECRET_KEY, { expiresIn: '1h' });
        const{password : pass ,...rest}= user._doc;

        res.status(200).cookie('access_token', token, {
            httpOnly: true,
        }).json(rest);
    } catch (error) {
        next(error);
    }
};

export const google= async(req, res, next)=>{
    const{email, name, googlePhotoUrl}= req.body;

    try {
        const user = await User.findOne({ email });
        if (user) {
            const token = jwt.sign({ userId: user._id, isAdmin : user.isAdmin }, process.env.SECRET_KEY);
            const {password, ...rest}= user._doc;
            res.status(200).cookie('access_token', token, {
                httpOnly: true,
                }).json(rest);
                } else {
                    const generatedPassword= Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
                    const hashedPassword= bcryptjs.hashSync(generatedPassword,10);
                    const newUser = new User({ 
                        username: name.toLowerCase().split(' ').join('') + Math.random().toString(9).slice(-4),
                        email,
                        password: hashedPassword,
                        profilePicture: googlePhotoUrl,


                    });
                    await newUser.save();
                    const token = jwt.sign({ userId: user._id, isAdmin: newUser.isAdmin  }, process.env.SECRET_KEY, { expiresIn: '1h' });

                    const {password, ...rest}= newUser._doc;
                    res.status(200).cookie('access_token', token, {
                        httpOnly: true,
                        }).json(rest);
                }
    } catch (error) {
        next(error);
    }
}

        


