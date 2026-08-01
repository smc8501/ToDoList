import { Router } from 'express';
import { bcrypt } from 'bcryptjs';
import { jwt } from 'jwt';


const public_users = Router();

public_users.get('/api', function(req, res) {

    return res.status(200).json({message:"/ route open"});
});

public_users.post("/api/register", (req, res) => {
    const {username, email, password} = req.body;

    const registerPromise = new Promise((resolve, reject) => {
        if (!username && !email && !password) {
            reject("Invalid username, email or password");
        }
        if (username && email && password) {
            const existingUser = users.find(user => user.username === username);
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            if (existingUser) {
                reject("Username already exists");
            } else {

                users.push({username, email, hashedPassword});
                resolve("User created successfully");
            }
        }
    });

    registerPromise
    .then((data) => {
        return res.status(200).json({message: "User registered sucessfully"})
    })
    .catch((error) => {
        return res.status(500).json({message: error})
    });
});

export const general = public_users;