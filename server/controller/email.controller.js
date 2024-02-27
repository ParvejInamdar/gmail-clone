import email from "../model/email.js";

export const saveSendEmail = (req,res) => {
    try{
        const newEmail =  new email(req.body); 
        newEmail.save();
        res.status(200).json('email saved sucessfully');
    } catch (error){
        res.status(500).json(error.messsage);
    }
}