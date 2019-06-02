const Login = require('../models/Login');

class LoginController {
    async store(req, res) {


        const login = await Login.create(req.body);
        return res.json(login);
    }

    async show(req, res) {
        const login = await Login.findOne(req.body.username);
        console.log(login);
        
        return res.json(login);
    }
}

module.exports = new LoginController();