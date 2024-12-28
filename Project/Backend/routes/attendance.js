const express = require('express');

const router = express.Router();


// Example of checking in a participant (This would be connected to your DB)

router.post('/check-in', (req, res) => {
  
const { participant_id, session_id } = req.body;

  
// Simulating attendance marking
  
const checkInTime = new Date();

  
// Respond with check-in confirmation
  
res.json({
    
message: "Attendance marked successfully",
    
participant_id,
    
session_id,
    
check_in_time: checkInTime
  
});

});


module.exports = router;