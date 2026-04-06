# Finance Dashboard Backend

## 📌 Overview
This project is a backend API for a finance dashboard system that manages financial records with role-based access control and summary analytics.

## 🚀 Tech Stack
- Node.js
- Express.js
- MongoDB (if used)

## 📂 Features

### 1. Financial Records Management
- Create transactions
- View transactions
- Update transactions
- Delete transactions

### 2. Filtering
- Filter by type (income/expense)
- Filter by category
- Filter by date

### 3. Dashboard Summary
- Total income
- Total expenses
- Net balance

### 4. Role-Based Access Control
- Admin: Full access
- Analyst: Read + summary
- Viewer: Read only

### 5. Validation & Error Handling
- Input validation
- Proper status codes

## 🔗 API Endpoints

### Transactions
- POST /transactions
- GET /transactions
- PUT /transactions/:id
- DELETE /transactions/:id

### Summary
- GET /summary

## ▶️ How to Run
```bash
npm install
npm start
