# OpsTrack

OpsTrack is a full-stack business performance management system for tracking small business records such as sales, labor, bookings, and expenses.

## Starting Page

Start at:

http://localhost:3000

## Login

Username: admin  
Password: 1234

## Features

- User authentication
- Display all business records
- Add new records
- Edit existing records
- Delete records
- Search records by category or notes
- JavaScript form validation
- MySQL database integration

## How to Run

1. Install dependencies:

npm install

2. Create the MySQL database:

CREATE DATABASE opstrack_db;

3. Create the records table:

CREATE TABLE records (
   id INT AUTO_INCREMENT PRIMARY KEY,
   category VARCHAR(50) NOT NULL,
   amount DECIMAL(10,2) NOT NULL,
   record_date DATE NOT NULL,
   notes VARCHAR(255)
);

4. Start the server:

npm start

5. Open browser:

http://localhost:3000
