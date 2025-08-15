🔐 Full Stack Password Manager

A secure password manager built with React.js, Spring Boot, and MySQL.
Passwords are Base64 encoded before storing in the database and decoded when displaying.

📌 Features

✅ Add, View, Update, and Delete passwords

✅ Base64 encoding for stored data

✅ Simple and clean React.js frontend

✅ Spring Boot backend API for CRUD operations

✅ MySQL database for storage

🛠️ Tech Stack

Frontend: React.js, HTML, CSS, JavaScript
Backend: Spring Boot (Java)
Database: MySQL
Security: Base64 Encoding

📂 Project Structure
password-manager/
│
├── backend/        # Spring Boot backend
│   ├── src/main/java/...  # Controllers, Services, Repositories
│   ├── src/main/resources/application.properties
│
├── frontend/       # React.js frontend
│   ├── src/        # Components & Pages
│   ├── package.json
│
└── README.md


🚀 How to Run
1️⃣ Backend (Spring Boot)
cd backend
mvn spring-boot:run

2️⃣ Frontend (React.js)
cd frontend
npm install
npm start


Backend runs on http://localhost:8080
Frontend runs on http://localhost:5173
