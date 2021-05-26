"use strict"
require("dotenv").config()
const jwt = require("jsonwebtoken")
let secret = 'EqsdasawTsdaF&%201a6SEalpLpRczY'

const verisign = (payload) =>{
    const proto = {
        type: 'Verisign',
        sign(){
            return jwt.sign(payload, secret)
        },
        verify(){
            return jwt.verify(payload, secret, (err, decoded)=>{
                if(err) {console.log(err)}
                return decoded
            })
        }
    }
    return Object.assign(Object.create(proto), {payload})
}


var newt = verisign(`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiam9obiIsImVtYWlsIjoiam9obi5jZW5hQHd3ZS5jb20iLCJhZ2UiOjE2LCJpYXQiOjE2MjIwNjQ4ODd9.PvWIf-WMk389N_XinQq85bWgWa5vpVpuLERVFf0W93g`) 

console.log(newt)
// console.log(newt.sign())
console.log(newt.verify())

module.export = {
    verisign
} 