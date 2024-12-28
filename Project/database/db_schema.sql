CREATE TABLE participants (
  
participant_id INT AUTO_INCREMENT PRIMARY KEY,
  
name VARCHAR(50) NOT NULL,
  
email VARCHAR(30) NOT NULL,
  
organization VARCHAR(50),
  
qr_code VARCHAR(40),
  
sessions_registered TEXT

);


CREATE TABLE tracks (
  
track_id INT AUTO_INCREMENT PRIMARY KEY,
  
title VARCHAR(50) NOT NULL,
  
description TEXT

);


CREATE TABLE sessions (
  
session_id INT AUTO_INCREMENT PRIMARY KEY,
  
track_id INT,
  
title VARCHAR(50) NOT NULL,
  
speaker VARCHAR(50) NOT NULL,
  
time VARCHAR(15),
  
venue VARCHAR(50),
  
capacity INT,
  
registered_count INT,
  
FOREIGN KEY (track_id) REFERENCES tracks(track_id)

);


CREATE TABLE attendance (
  
attendance_id INT AUTO_INCREMENT PRIMARY KEY,
  
participant_id INT,
  
session_id INT,
  
check_in_time DATETIME,
  
FOREIGN KEY (participant_id) REFERENCES participants(participant_id),
  
FOREIGN KEY (session_id) REFERENCES sessions(session_id)

);