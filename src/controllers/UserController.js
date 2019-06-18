const User = require('../models/User');

const NodeRSA = require('node-rsa');
const key = new NodeRSA({b: 512});
key.setOptions({
    encryptionScheme: 'pkcs1'
});



// const decrypted = key.decrypt(encrypted, 'utf8');

class UserController{
   async store(req,res) {
       console.log(req.body);
       
        req.body.username = key.decrypt(req.body.username, 'base64');
        req.body.password = key.decrypt(req.body.password, 'base64');
        req.body.email = key.decrypt(req.body.email, 'base64');
        const user = await User.create(req.body);
        console.log(req);
        
        return res.json(user);
    }

    async show(req,res){
        const user = await User.findById(req.params.id);

        return res.json(user);
    }
}

module.exports = new UserController();