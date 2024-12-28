const express = require('express');

const router = express.Router();


// Example sessions (this should be fetched from your database)

const sessions = [
  
{
    
session_id: 1,
    
track_id: 1,
    
title: "importance of sustainable engineering practices in addressing global challenges",
    
speaker: "Prof. U.P. Nawagamuwa",
    time: "10:00 AM",
    venue: "Dr. TAG Gunasekara Multifunctional Hall",
    capacity: 300,
    registered_count: 150
  },
  {
    session_id: 2,
    track_id: 1,
    title: "Super-Smart Textiles: A Cross-Disciplinary Journey Towards Future Wearable Technologies",
    speaker: "Dr. Ishara Dharmasena",
    time: "02:00 PM",
    venue: "Dr. TAG Gunasekara Multifunctional Hall",
    capacity: 300,
    registered_count: 150
  }

];


// Fetch the schedule

router.get('/schedule', (req, res) => {
  
res.json(sessions)
;
});


module.exports = router;