const mysql = require('mysql2');
const bodyParser = require('body-parser');
const { Writable } = require('stream');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(express.json());

app.use(cors({
    origin: 'http://127.0.0.1:5500', // Replace with your frontend's origin
    methods: ['POST'],
    allowedHeaders: ['Content-Type']
}));

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'signup'
});

con.connect(function (err) {
    if (err) {
        throw err
    }
    console.log("Connected successfully");
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    con.query('SELECT * FROM data WHERE username = ?', [username], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Database query error' });
        }

        if (result.length === 0) {
            return res.status(500).json({ user: `No data found for user ${username}` });
        }

        // Check if password matches the username's password
        if (result[0].password !== password) {
            return res.status(500).json({ pass: `Password doesn't match for ${username}` });
        }

        return res.status(200).json({ message: 'Login successful' });
    });
});


app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;

    con.query('SELECT * FROM data', (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Database query error' });
        }
        let ecount = 0, ucount = 0;
        result.forEach(element => {
            if (username == element.username) {
                ucount++;
            }
            if (email == element.email) {
                ecount++;
            }
        });

        if (ucount > 0) {
            return res.status(400).json({ user: 'Username already exists' });
        }

        if (ecount > 0) {
            return res.status(400).json({ email: 'Email already exists' });
        }

        con.query(
            'INSERT INTO data(email, username, password) VALUES(?, ?, ?)',
            [email, username, password],
            (err) => {
                if (err) {
                    return res.status(500).json({ error: 'Failed to insert data' });
                }
                res.status(201).json({ message: 'Signup successful' });
            }
        );
    });
});

app.post('/resetPassword', (req, res) => {
    const { username, newPassword } = req.body;
    con.query('SELECT *FROM data WHERE username = ?', [username], (err, result) => {
        if (result.length === 0) {
            return res.status(500).json({ user: "Username doesn't exist!" });
        }

        con.query('UPDATE data SET password = ? WHERE username = ?', [newPassword, result[0].username], (err) => {
            if (err) { throw err }
            else {
                return res.status(200).json({ message: "Password updated successfully" });
            }
        });
    });
});


app.listen(3000, () => {
    console.log('listening on port 3000');
});
