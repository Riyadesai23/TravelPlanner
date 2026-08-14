# 🌍 Travel Planner

A web-based **Travel Planner** application that helps users manage trips, bookings, profiles, and travel-related information in one place.

The project is built using **HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, and Mongoose**.

## 📌 Features

### 👤 User Management & Authentication

* User Registration
* User Login
* User Logout
* User Profile Management
* Change Password
* User data stored in MongoDB
* Passwords stored using secure hashing

### ✈️ Trip Management

* Add new trips
* View trips
* Edit trips
* Delete trips
* Search trips by trip name or destination
* Filter trips by status
* Trip status:

  * Planned
  * Ongoing
  * Completed

### 🏨 Booking & Dashboard

* Hotel booking demo
* Transport booking demo
* Booking history
* User dashboard
* Total trips summary
* Total bookings summary
* Total spending summary
* Upcoming trips summary
* Reports and summary
* Hotel and transport booking statistics

## 🛠️ Technologies Used

| Technology    | Purpose                        |
| ------------- | ------------------------------ |
| HTML5         | Frontend structure             |
| CSS3          | Styling and layout             |
| JavaScript    | Frontend functionality         |
| Node.js       | Backend runtime                |
| Express.js    | Backend APIs                   |
| MongoDB Atlas | Database                       |
| Mongoose      | MongoDB object modeling        |
| bcryptjs      | Password hashing               |
| dotenv        | Environment variables          |
| CORS          | Frontend-backend communication |

## 📁 Project Structure

```text
TravelPlanner/
│
├── models/
│   ├── Trip.js
│   ├── User.js
│   └── Booking.js
│
├── routes/
│   ├── authRoutes.js
│   └── bookingRoutes.js
│
├── public/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/TravelPlanner.git
```

### 2. Open the project

```bash
cd TravelPlanner
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create the `.env` file

Create a `.env` file in the project root:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Do **not** upload your real `.env` file or MongoDB credentials to GitHub.

### 5. Start the server

```bash
node server.js
```

The application will run at:

```text
http://localhost:5000
```

## 🗄️ Database

The application uses **MongoDB Atlas**.

Main collections:

```text
users
trips
bookings
```

### Users

Stores:

* Name
* Email
* Hashed password
* Phone
* Created/updated timestamps

### Trips

Stores:

* Trip name
* Destination
* Start date
* End date
* Budget
* Number of travelers
* Status

### Bookings

Stores:

* User ID
* Booking type
* Hotel/transport name
* Destination
* Booking date
* Amount
* Booking status

## 🔗 Main API Endpoints

### Authentication

```text
POST   /api/auth/register
POST   /api/auth/login
PUT    /api/auth/profile/:id
GET    /api/auth/profile/:id
PUT    /api/auth/change-password/:id
```

### Trips

```text
GET    /api/trips
POST   /api/trips
PUT    /api/trips/:id
DELETE /api/trips/:id
```

### Bookings

```text
POST   /api/bookings
GET    /api/bookings/:userId
GET    /api/bookings/dashboard/:userId
GET    /api/bookings/reports/:userId
```

## 👥 Project Modules

### Member 1 — User Management & Authentication

Responsible for:

* Registration
* Login and Logout
* Profile Management
* Change Password
* User data management in MongoDB

### Member 2 — Trip Management

Responsible for the assigned trip-management functionality.

### Member 3 — Booking & Dashboard

Responsible for:

* Hotel and Transport Booking
* Booking History
* User Dashboard
* Search & Filter Trips
* Reports & Summary

## 🔒 Security

* Passwords are hashed using `bcryptjs`.
* MongoDB credentials are stored in environment variables.
* Sensitive configuration files should not be committed to GitHub.

## 🚀 Future Enhancements

* Real hotel and transport APIs
* Online payment integration
* Maps and route planning
* Email notifications
* JWT-based authentication
* User-specific trip analytics
* Responsive mobile interface
* Deployment to a cloud platform

## 🎓 Project Purpose

This project was developed as an academic **Travel Planner** application to demonstrate frontend development, backend API development, MongoDB database integration, authentication, booking management, filtering, dashboards, and reporting.

## 👩‍💻 Author

**Travel Planner Project**

Developed as a group academic project.

SEREVER RUNNING AT:- http://localhost:5000

GIT HUB LINK:-https://github.com/Riyadesai23/TravelPlanner




