import connectDB from '../../../utils/connectDB'
import User from '../../../models/userModel'
import Register from '../../register'
import valid from '../../../utils/valid'
import bcrypt from 'bcrypt'

connectDB()

export default async (req, res) => {
    switch (req.method) {
        case "POST":
            await register(req, res)
            break;
    
        default:
            break;
    }
}

const register = async (req, res) => {
    try {
        const {name, email, password, cf_password} = req.body
        const errMsg = valid(name, email, password, cf_password );

        if(errMsg) return res.status(400).json({err: errMsg})

        const passwordHash = await bcrypt.hash(password, 12)
        const newUser = new User({
          name,
          email,
          password: passwordHash,
          cf_password,
        });

        console.log(newUser)

        res.json({msg: "Register Succces!" })

    } catch (error) {
        return res.status(500).json({ err: error.message });
    }
}