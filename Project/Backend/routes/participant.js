const express = require('express');

const router = express.Router();

const qrCodeGenerator = require('../qrCodeGenerator'); // QR Code generation logic


// Register participant and generate QR code

router.post('/register', (req, res) => {
  
const { name, email, organization, sessions_registered } = req.body;

  
// Generate a QR code for the participant
  
const qrCode = qrCodeGenerator.generateQR(name, email);

  
// Save the participant info to the database (simulated here with a mock response)
  
const participant = {
    
name,
    
email,
    
organization,
    
qrCode,
    
sessions_registered
  
};

  
// Respond with the participant details and QR code
  
res.status(200).json({
    
message: "Participant registered successfully",
    
participant
  
});

});


module.exports = router;