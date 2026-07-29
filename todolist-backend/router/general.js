import { Router } from 'express';

const public_users = Router();

public_users.get('/', function(req, res) {

    return res.status(200).json({message:"/ route open"});
});

export const general = public_users;