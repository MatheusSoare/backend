class HandShakeController {
    async doHandShake(req, res) {
      return res.json({publicKey :
        `-----BEGIN PUBLIC KEY-----
        MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCvslv8UjnU9T3RG6WwJOTJ0EdS
        AFxMIT6N/eJ704Mh0CkksAD2hdspEJ5Qq07b6DPQcpI5zK1DQqC50vZMnP/hTZlU
        GbNxoF5JXgZn13ziUq9eL1ACayLBOiywmogG/Icg78vOqmDvaURClMXjARsjHX4X
        9rWUTwhBguBzL12BMQIDAQAB
        -----END PUBLIC KEY-----`});
    }
}

module.exports = new HandShakeController();