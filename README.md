Project Overview:-
Travel Planner is a web-based application for creating and managing travel plans. Users can add trips, view saved trips, edit trip details, and delete trips. Trip information is stored in MongoDB.

Group Members:-
Komal Purohit – Frontend / UI work
Riya Desai – Backend / MongoDB integration
Aastha Sharma – Testing, documentation and GitHub coordination

Technology Stack:-
HTML5, CSS3, JavaScript, Node.js, Express.js, MongoDB Atlas, Mongoose, Git and GitHub.

Features:-
Add a new trip
View all trips
Edit trip details
Delete trips
Store trip data in MongoDB
Simple responsive GUI
Trip Fields
Trip name
Destination
Start date
End date
Budget
Number of travelers
Status

Project Structure:-
TravelPlanner
├── models/
│   └── Trip.js
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── server.js

Architecture:-
Browser GUI
   ↓
JavaScript Fetch API
   ↓
Express.js
   ↓
Mongoose
   ↓
MongoDB Atlas

API Endpoints

Method

Endpoint

Purpose

GET

/api/trips

Get all trips

POST

/api/trips

Add a trip

PUT

/api/trips/:id

Update a trip

DELETE

/api/trips/:id

Delete a trip

Run the Project

npm install
node server.js

Open http://localhost:5000.

Create a .env file locally:

MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
PORT=5000

Security

Never upload .env to GitHub. Keep .env in .gitignore.

GitHub

Add the final repository URL here: https://github.com/<username>/TravelPlanner

Future Enhancements

User authentication, search/filtering, map integration, weather information, expense tracking and PDF itinerary export.
