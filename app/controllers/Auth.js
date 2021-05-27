"use strict"
const bcrypt = require("bcrypt")
const {sign, verify}= require("../middlewares/verisign")
const model = require("../models/index") 

const Sequelize = require("sequelize")
const Op = Sequelize.Op 


exports.home = (req, res) => {
    res.status(200).json({
        link: `http://localhost:${process.env.PORT}/auth/`
    })
}

exports.login = (req, res) => {
    res.status(200).json({
        message: `Login`,
        date: new Date()
    })
}

exports.loginv1 = async(req, res) => {
    var {email,password} = req.body 
    var token = null     
    var user = await model.Users.findOne({
        where:{
            email:email            
        }
    }).then(response=>{
        return response.dataValues 
    }).then(async data =>{                       
        bcrypt.compare(password, data.password, function(err, result){
            if (result===true) {
                console.log(result)                
                data.password = undefined             
                token = sign(JSON.stringify(data))      
                return res.status(200).json({
                    token: token, 
                    user:data,
                    date: new Date()
                })
            } else {
                return res.status(401).json({
                    message: `Password mismatch`,
                    date: new Date()
                })
            }
        })
    })

}


exports.register = async(req, res) =>{
    const rounds = 10 
    let {firstName, lastName,email, password} = req.body 
    bcrypt.genSalt(rounds, (err,salt)=>{
        bcrypt.hash(password, salt, async(err, hash)=>{
            password = hash         
            try {        
                let user = await model.Users.create({firstName, lastName,email,password})
                res.status(200).json({
                    message: `Succeed in resource creation`,
                    user: user 
                })
            }catch(e){
                res.status(400).json({
                    message: `Failed to create resource`,
                    error: e
                })
            }    
        })
    })
}

// Logout 
exports.logout = (req, res) => {
    res.status(200).json({
        message: `Logout`,
        date: new Date()
    })
}

// Querying through the users 

exports.findAll = async(req, res) => {
    const myUsers = await model.Users.findAll({
        attributes:{
            exclude:["password"]
        }
    })
    // console.log(JSON.stringify(users, null, 4))
    res.status(200).json({
        users:myUsers 
    })
}