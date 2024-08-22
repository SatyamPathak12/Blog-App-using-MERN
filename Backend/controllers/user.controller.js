import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from 'bcryptjs';

// Test Route
export const test = (req, res) => {
    res.json({ message: 'API is working' });
};

// Update User Route
export const updateUser = async (req, res, next) => {
    try {
        console.log('req.user.id:', req.user.id);
        console.log('req.params.userId:', req.params.userId);

        // Verify user ID from token matches the user ID in the request params
        if (req.user.id.toString() !== req.params.userId.toString()) {
            return next(errorHandler(403, 'You are not allowed to update this user'));
        }
        

        // Handle password update
        if (req.body.password) {
            if (req.body.password.length < 6) {
                return next(errorHandler(400, 'Password must be at least 6 characters long'));
            }
            req.body.password = bcryptjs.hashSync(req.body.password, 10);
        }

        // Handle username update
        if (req.body.username) {
            if (req.body.username.length < 7 || req.body.username.length > 20) {
                return next(errorHandler(400, 'Username must be between 7 and 20 characters'));
            }
            if (req.body.username.includes(' ')) {
                return next(errorHandler(400, 'Username cannot contain spaces'));
            }
            if (req.body.username !== req.body.username.toLowerCase()) {
                return next(errorHandler(400, 'Username must be in lowercase'));
            }
            if (!req.body.username.match(/^[a-zA-Z0-9]+$/)) {
                return next(errorHandler(400, 'Username can only contain letters and numbers'));
            }
        }

        // Update user in the database
        const updatedUser = await User.findByIdAndUpdate(req.params.userId, {
            $set: {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                profilePicture: req.body.profilePicture, // Fixed to use profilePicture not password
            }
        }, { new: true });

        // Remove password from the response
        const { password, ...rest } = updatedUser._doc;

        // Send response with the updated user data
        res.status(200).json(rest);

    } catch (error) {
        next(error);
    }
};
