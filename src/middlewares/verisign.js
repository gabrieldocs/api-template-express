"use strict"
require("dotenv").config()
const jwt = require("jsonwebtoken")

const verisign = (payload) =>{
    const proto = {
        type: 'Verisign',
        sign(){
            return jwt.sign(payload, process.env.SECRET)
        },
        verify(){
            jwt.verify(payload, process.env.SECRET, (err, decoded)=>{
                if(err) {console.log(err)}
                return decoded
            })
        }
    }
    return Object.assign(Object.create(proto), {payload})
}


exports.sign = (payload) => {
    return jwt.sign(payload, process.env.SECRET)
}

exports.verify = (payload) =>{
    jwt.verify(payload, process.env.SECRET, (err, decoded)=>{
        if(err) {console.log(err)}
        return decoded
    })
}