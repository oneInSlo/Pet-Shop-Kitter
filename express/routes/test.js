const sqlite3 = require('sqlite3').verbose();

// Open the database
const db = new sqlite3.Database('../dev.sqlite3', (err) => {
    if (err) {
        console.error('Error opening database:', err);
    } else {
        console.log('Connected to the database.');
    }
});

// Example: Execute a SELECT query
db.all('SELECT * FROM uporabniki', (err, rows) => {
    if (err) {
        console.error('Error executing query:', err);
    } else {
        console.log('Rows:', rows);
    }
});

