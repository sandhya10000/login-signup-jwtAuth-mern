# 🔐 MERN Stack Authentication System (JWT Based)

A full-stack authentication system built using **React.js** for the frontend and **Node.js, Express.js, and MongoDB** for the backend. This project demonstrates secure user authentication using **JSON Web Tokens (JWT)** and follows industry best practices for password security and route protection.

---

## 📌 Project Overview

This application allows users to:

* Register a new account
* Log in securely
* Access protected routes
* Maintain authentication state
* Log out safely

The system uses JWT-based authentication and hashed passwords to ensure secure communication between frontend and backend.

---

## 🚀 Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* State Management (useState / Context API)

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Token (JWT)
* bcrypt
* dotenv
* CORS

---

## 🔐 Authentication Flow

1. User registers with email and password.
2. Password is securely hashed using bcrypt before storing in MongoDB.
3. During login:

   * Credentials are verified.
   * A JWT token is generated.
4. The token is stored on the client side.
5. Protected routes validate the token before granting access.
6. Unauthorized users are redirected to the login page.

---

## ✨ Key Features

* Secure password hashing
* JWT-based authentication
* Protected routes (Frontend + Backend)
* Middleware-based token verification
* Clean folder structure
* Environment variable configuration
* Logout functionality
* Error handling with toast notifications

---

## 📂 Project Structure

The project is divided into two main parts:

### Frontend

* Login Page
* Signup Page
* Home (Protected Page)
* Private Route Handling
* Authentication State Management

### Backend

* User Model
* Authentication Controller
* Routes (Signup/Login)
* JWT Verification Middleware
* Database Configuration

---

## 🎯 Learning Objectives

Through this project, I gained hands-on experience in:

* Implementing secure authentication in MERN stack
* Creating JWT tokens and verifying them
* Building protected routes in React
* Writing middleware in Express
* Managing authentication state in frontend applications
* Structuring a full-stack project professionally

---

## 🔮 Future Enhancements

* Refresh Token Implementation
* Role-Based Authorization (Admin/User)
* Email Verification
* Forgot Password Feature
* Deployment (Render / Vercel)
* Docker Support

---

## 👩‍💻 About Me

**Sandhya Kumari**
MERN Stack Developer
2.5+ Years of Experience

This project reflects my understanding of authentication architecture and full-stack development using the MERN stack.

