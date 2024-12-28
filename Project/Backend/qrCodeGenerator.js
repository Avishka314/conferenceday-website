const qrcode = require('qrcode');


const generateQR = (name, email) => {
  
const data = `Participant: ${name}\nEmail: ${email}`;
  
let qrCode;
  
qrcode.toDataURL(data, (err, url) => {
    
if (err) throw err;
    
qrCode = url; // Generated QR code URL
  
});
  
return qrCode;

};


module.exports = { generateQR };