const router = require("express").Router();
const qrController = require('./qr.controller');

router.post('/', async (req, res, next)=>{
    try {
        const {url} = req.body;
        if(!url) throw new Error("URL required");
        const result = await qrController.createQR(url);
        res.json({data: result, msg:"success"});
    } catch (error) {
        next(error)
    }
})

module.exports = router;