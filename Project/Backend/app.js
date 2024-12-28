const express = require('express');

const app = express();

const port = 3000;

const bodyParser = require('body-parser');

const path = require('path');


// Middleware to parse JSON
app.use(bodyParser.json());


// Serve frontend static files

app.use(express.static(path.join(__dirname, '../frontend')));


// Routes

const participantRoutes = require('./routes/participant');

const sessionRoutes = require('./routes/session');

const attendanceRoutes = require('./routes/attendance');


// Use Routes

app.use('/api/participants', participantRoutes);

app.use('/api/sessions', sessionRoutes);

app.use('/api/attendance', attendanceRoutes);


// Start server

app.listen(port, () => {
  
console.log(`Server is running at http://localhost:${port}`);

});