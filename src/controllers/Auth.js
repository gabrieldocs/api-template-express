"use strict"
const {sign, verify}= require("../middlewares/verisign")

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

exports.loginv1 = (req, res) => {
    var token = sign(req.body)
    res.status(200).json({
        token: token, 
        body:req.body,
        date: new Date()
    })
}

exports.logout = (req, res) => {
    res.status(200).json({
        message: `Logout`,
        date: new Date()
    })
}