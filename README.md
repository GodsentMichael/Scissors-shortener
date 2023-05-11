
# Scissor URL Shortener

Scissor URL Shortener is a simple web application that allows you to create short URLs for long and complex web addresses. It helps make your links more manageable and shareable.

## Features

- Generate short URLs for long web addresses
- Easily copy and share the shortened URLs
- Redirect users to the original long URL when they visit the shortened URL
- View analytics and statistics about the usage of the shortened URLs

## Technologies Used

- Frontend: [React](https://reactjs.org/)
- Backend: [Node.js](https://nodejs.org/) with [Express](https://expressjs.com/)
- Database: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/GodsentMichael/Scissors-shortener.git
   ```
   - Open up two terminal points.
   - One for the backend and the other for frontend.
   
2. Then navigate to the project directory
  - For the backend
  ```bash    
  cd Backend 
  ```
  - For the Frontend
  ```bash    
  cd scissor-ui 
  ```
3. Install dependencies
  ```bash
  npm install
  ```
4. Set up the environment variables:

- Create a .env file in the project root directory.
- Define the following environment variables in the .env file:
- MONGODB_URI: The connection string for your MongoDB database.
- Other configuration variables like the server port, if applicable.

5. Start the development server
   ```bash
   npm start
   ```
   
 6. Access the application in your browser at http://localhost:3000. 

  ## Usage
  - Enter the long URL in the input field on the home page.
  - Click the "Shorten" button to generate a shortened URL.
  - Copy the generated short URL and share it with others.
  - When someone visits the shortened URL, they will be redirected to the original long URL.
  - View  the analytics and statistics for the shortened URLs on the analytics page.

  ## Contributing
  - Contributions are welcome! If you find any issues or have suggestions for improvement, please feel free to open an issue or submit a pull request.

  ## License
  - MIT
