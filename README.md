# Connect Frontend and Backend

A simple project for getting familiar with connecting a frontend and backend service.

## Tech Stack

### Backend

- `Node.js`
- `Express.js`

### Frontend

- `Vite`
- `React.js`
- `Axios`

## Instructions for Running the Project

- Clone the repository

- Navigate to the project directory

  ```sh
  cd connect-frontend-backend
  ```

- Install dependencies for the backend

  ```sh
  cd backend
  pnpm install
  ```

- Start the backend server

  ```sh
  pnpm run start
  ```

- Install dependencies for the frontend (use another terminal window/tab)

  ```sh
  cd frontend
  pnpm install
  ```

- Start the frontend server

  ```sh
  pnpm run start
  ```

- Open your browser and navigate to `http://localhost:5137` to view the frontend application.

- The frontend will make a request to the backend server running on `http://localhost:5000` to fetch data.

- You can modify the backend code in `backend/index.js` and the frontend code in `frontend/src/App.jsx` to customize the application as per your requirements.

- The backend server is set up to respond to GET requests at the `/api/users` endpoint with a simple JSON response.
