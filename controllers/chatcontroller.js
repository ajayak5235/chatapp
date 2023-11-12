const personalMsg = require('../model/chat-model');

const sequelize = require('../util/database');

exports.personalMsg = (req, res, next) => {
    const uid = req.user
    personalMsg.create({ userId: uid, msg: req.body.msg })
        .then(result => {
            res.status(200).json({ message: 'chat is in now database', success: true })
        }).catch(err => {
            console.log(err)
            res.status(500).json({ message: 'something went wrong', success: false })
        })
}

exports.getmsg = (req,res) =>{
    
}