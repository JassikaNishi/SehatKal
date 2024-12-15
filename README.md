# SehatKal
**A Health Monitoring and Consultation Platform**

SehatKal is a modern, responsive web application that provides users with the ability to track their health data and book consultations with healthcare professionals. Built with React and Node.js, this platform is designed for users looking to manage their health in an easy and efficient way.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributors](#contributors)
- [Contact](#contact)

## Features
- **Health Data Tracking**: Allows users to input and track their health metrics such as weight, blood pressure, and heart rate.
- **Consultation Services**: Users can schedule consultations with healthcare professionals through the platform.
- **User Authentication**: Secure registration and login system for both users and healthcare professionals.
- **Responsive Design**: The platform is mobile-friendly and adapts to different screen sizes.
- **Real-time Data**: Health data updates in real-time, allowing users to track their health status easily.

## Technologies Used
- **Frontend**: React.js, HTML, CSS, JavaScript, Tailwind CSS, Vite
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Hosting**: Vercel (Frontend), Heroku (Backend)

## Installation

### Prerequisites
Before running the project locally, make sure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (for local development, or use MongoDB Atlas)

### Steps to run the project

1. **Clone the repository**:
   ```bash
   git clone https://github.com/JassikaNishi/SehatKal.git
Install dependencies:

For the Frontend:
bash
Copy code
cd SehatKal/SehatKal
npm install
For the Backend:
bash
Copy code
cd SehatKal/server
npm install
Set up environment variables:

In the backend folder, create a .env file and add the following:
makefile
Copy code
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret-key
In the frontend folder, create a .env file and add:
arduino
Copy code
VITE_API_URL=http://localhost:5000
Start the backend server:

bash
Copy code
cd SehatKal/server
npm start
Start the frontend server:

bash
Copy code
cd SehatKal/SehatKal
npm run dev
Visit http://localhost:3000 in your browser to view the website.

Usage
Login or Register: On the home page, users can log in or create a new account.
Health Data: Once logged in, users can input and track their health data, such as weight, blood pressure, and heart rate.
Consultation Booking: Users can book consultations with healthcare professionals through the platform.
Demo Accounts
User Account:
Username: demoUser
Password: demoPassword
Admin Account (Healthcare Professional):
Username: admin
Password: admin123
Screenshots
Dashboard Overview

Health Data Form

Contributors
We thank the following contributors for their work on this project:

Anisha Plawat (#13Anisha)
Jassika (#JassikaNishi)


Contact
For any inquiries or feedback, you can reach out to:

Jassika 
Email: jassika.jassika.jassika@gmail.com
GitHub: github.com/JassikaNishi
OR
Anisha Plawat
Email: anisha.plawat@gmail.com
GitHub: github.com/13Anisha
