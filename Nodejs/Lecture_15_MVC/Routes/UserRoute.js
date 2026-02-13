import express from 'express'
import { userRegister } from '../Controllers/UserController.js'

const router = express.Router();

// home page router
router.get('/',(req,res)=>{
    res.render("index");
});

// Form submission route..
router.post('/form_submit',userRegister);

export default router;