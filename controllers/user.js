const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = async (req, res) => { 
    const {name,email,admin}= req.body
    try{
        await prisma.user.create( {
        data:{
            'full_name':name,
            'email':email,
            'user_admin':admin
        }
        })
        res.status(201).json({
            "error":false,
            "reponse":"created user"
        })
    }
    catch(e){
        res.status(404).json({
            "error":true,
            "reponse":e
        })
    }
}