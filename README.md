# flight-monitor
Flight Monitor is a real-time flight data monitoring system. It includes both frontend and backend parts, built with React and Node.js. The system allows users to track flights and visualize the data.

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)

### 1. Clone the Project

Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/username/flight-monitor.git
cd flight-monitor

cd server
npm install
cp .env.example .env

MONGO_URI=mongodb://127.0.0.1:27017/flight-monitor
PORT=3000

#make sure you satrt the backend
 cd server
 node src/index.js

#and then the forntend
cd client
npm run dev

and go to link http://localhost:5173/ 
