import bcrypt from 'bcryptjs'
import { User } from '../Models/UserModel.js';
import jwt from 'jsonwebtoken'
export const register =  async(req, res) => {
    const {name,email,password} = req.body;
    if(name == "" || email == "" || password == "")
        return res.json({message: "All field are required.."})
    let user = await User.findOne({email})
    if(user) 
        return res.json({message:"user already exist", success: false})

    const hashPassword = await bcrypt.hash(password,10)
      user = await User.create({name, email, password: hashPassword })
    res.json({ message: "User Created Successfully...", success: true, user});
};


export const login = async (req,res)=>{
    const {email, password} = req.body;

    if(!email || !password){
        return res.json({message: "All fields are required"});
    }

    const user = await User.findOne({email});
    if(!user){
        return res.json({message: "User not exist", success: false});
    }

    const validPass = await bcrypt.compare(password, user.password);
    if(!validPass){
        return res.json({ message: "Invalid password", success: false});
    }

    const token = jwt.sign({userId:user._id},'Anshritik1@()',{
        expiresIn:'24h'
    })

    res.json({message: `Welcome ${user.name}`,token, success: true});
};
