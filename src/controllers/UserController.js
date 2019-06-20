const User = require('../models/User');
const CryptoJS = require('crypto-js');
const publicKey =
        `-----BEGIN PUBLIC KEY-----
        MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCvslv8UjnU9T3RG6WwJOTJ0EdS
        AFxMIT6N/eJ704Mh0CkksAD2hdspEJ5Qq07b6DPQcpI5zK1DQqC50vZMnP/hTZlU
        GbNxoF5JXgZn13ziUq9eL1ACayLBOiywmogG/Icg78vOqmDvaURClMXjARsjHX4X
        9rWUTwhBguBzL12BMQIDAQAB
        -----END PUBLIC KEY-----`;

class UserController{
   async store(req,res) {
       try{
           const data = JSON.parse(CryptoJS.AES.decrypt(req.body.data.toString(), publicKey).toString(CryptoJS.enc.Utf8));
           const user = await User.create(data);
           return res.json(user[0]);
       } catch (e) {
           console.log(e);
       }
    }

    async show(req,res){
        const user = await User.findById(req.params.id);

        return res.json(user);
    }
}

module.exports = new UserController();