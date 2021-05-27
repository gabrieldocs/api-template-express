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

exports.index = (req, res) => {
    res.status(200).json({
        message: "Welcome to the Login page",
        date: new Date()
    })
}

exports.login = async(req, res) => {
    var {email,password} = req.body 
    var token = null     
    if(!email    || email==undefined) return res.status(400).json({message: "Missing one or more fields"})
    if(!password || password==undefined) return res.status(400).json({message: "Missing one or more fields"})
    var user = await model.Users.findOne({
        where:{
            email:email            
        }
    }).then(response => {
        return response.dataValues 
    }).then(async data =>{                       
        bcrypt.compare(password, data.password, function(err, result){
            if (result===true) {
                console.log(result)                
                data.password = undefined   
                token = sign(data)
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
    let {firstName, lastName,email, password, pin, username} = req.body 
    if(!username|| username===undefined) 
        username = email 
    if(!pin || pin===undefined)
        pin = null 
    bcrypt.genSalt(rounds, (err,salt)=>{
        bcrypt.hash(password, salt, async(err, hash)=>{
            password = hash         
            try {        
                let user = await model.Users.create({firstName, lastName,email,password, username, pin})
                user.password = undefined 
                res.status(200).json({
                    message: `Succeed in resource creation`,
                    user: user 
                })
            }catch(e){
                console.log(e)
                res.status(400).json({                    
                    message: `Failed to create resource`                    
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