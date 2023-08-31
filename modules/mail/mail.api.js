const router = require("express").Router();
const mailService = require("../../services/mailer")

router.post('/', async(req, res, next)=>{
    try {
        const {email, qrUrl} = req.body;
        if(!qrUrl) throw new Error("qrURL is required");
        const result = await mailService.mailer({email, qrUrl});
        res.json({data: result, msg:"Success"})
    } catch (error) {
        next(error)
    }
})

module.exports = router;