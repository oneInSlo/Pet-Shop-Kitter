# Pet Shop Kitter

**Pet Shop Kitter** is a web application designed for shopping for pet supplies. This project is part of a school assignment for the course *Basics of Web Technologies* (*Osnove spletnih tehnologij*).


## Features

- Browse and purchase pet supplies such as food and toys.
- Use and get discounts.
- Navigate through simple and intuitive user interface.


## Technologies Used

- **Backend**: Node.js with Express
- **Database**: SQLite (local database for data storage)
- **Frontend**: HTML, CSS, and JavaScript
- **Tools**: DB Browser for SQLite for database management


## Installation


### Backend Setup

To get the backend of the project running, follow these steps:

1. **Ensure Node.js is installed** on your system. You can download it from [nodejs.org](https://nodejs.org/).

2. Navigate to the `express` folder and install the required dependencies by running the following command:

   ```bash
   npm install
   ```
   This will install all necessary modules and create a `node_modules` folder.

3. **Start the Express server** using the following command:

    ```bash
   node app.js
   ```

4. To verify that the backend is working, open your browser and go to `http://localhost:3000/`


### Frontend Setup

For the frontend, you can use the **Live Server** extension in Visual Studio Code to serve the static HTML files. Simply open the frontend folder in VS Code and run the Live Server to view the app.


### Database Setup

This project uses **SQLite** for database management. To inspect or modify the database, you can use the [DB Browser for SQLite](https://sqlitebrowser.org/).

1. Open DB Browser for SQLite.
2. In the application, open the database by selecting the `dev.sqlite3` file located in the `express` folder.


## Usage

Once the backend is running and the frontend is served, you can use the app to browse pet products, add them to your cart, and complete purchases. The backend will handle product management and order processing.


## Troubleshooting

- If you encounter any issues with the backend not starting, ensure that you’ve installed all dependencies with `npm install` and that Node.js is properly set up.
- Make sure the frontend and backend are running simultaneously for full functionality.


## Thank You!

Thank you for checking out **Pet Shop Kitter**! I hope you find it useful and enjoyable.

