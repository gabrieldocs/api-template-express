
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
exports.logout = (req, res) => {
    res.status(200).json({
        message: `Logout`,
        date: new Date()
    })
}