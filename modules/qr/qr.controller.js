const QRcode = require('qrcode')

const createQR = async(url)=>{
    const qrURL = await QRcode.toDataURL(url);
    return qrURL;
}


module.exports = {createQR}