const db = require("../db/db.js");

const createDatabaseAndTable = () => {
    const createDbQuery = `CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`;
    const useDbQuery = `USE ${process.env.DB_NAME}`;
    const createUsersTableQuery = `
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL
        )
    `;
    const createProductsTableQuery = `
        CREATE TABLE IF NOT EXISTS products (
            product_id INT AUTO_INCREMENT PRIMARY KEY,
            frontImage VARCHAR(255) NOT NULL,
            sideImage VARCHAR(255) NOT NULL,
            product_name VARCHAR(255) NOT NULL,
            type VARCHAR(255) NOT NULL,
            price DECIMAL(10, 2) NOT NULL,
            has_discount BOOLEAN DEFAULT FALSE
        )
    `;
    const createCategoriesTableQuery = `
        CREATE TABLE IF NOT EXISTS categories (
            category_id INT AUTO_INCREMENT PRIMARY KEY,
            category_name VARCHAR(255) NOT NULL
        )
    `;
    const createOrdersTableQuery = `
        CREATE TABLE IF NOT EXISTS orders (
            order_id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT,
            order_date DATE NOT NULL,
            total_amount DECIMAL(10, 2) NOT NULL,
            FOREIGN KEY (user_id) REFERENCES users(id)
        )
    `;

    db.query(createDbQuery, (err, results) => {
        if (err) throw err;
        console.log('Database created or already exists.');

        db.query(useDbQuery, (err, results) => {
            if (err) throw err;
            console.log('Using products_db database.');

            db.query(createUsersTableQuery, (err, results) => {
                if (err) throw err;
                console.log('Users table created or already exists.');

                db.query(createCategoriesTableQuery, (err, results) => {
                    if (err) throw err;
                    console.log('Categories table created or already exists.');

                    db.query(createProductsTableQuery, (err, results) => {
                        if (err) throw err;
                        console.log('Products table created or already exists.');

                        db.query(createOrdersTableQuery, (err, results) => {
                            if (err) throw err;
                            console.log('Orders table created or already exists.');
                        });
                    });
                });
            });
        });
    });
};

const registerUser = (req, res) => {
    const { username, password, email } = req.body;
    const insertQuery = `
        INSERT INTO users (username, password, email)
        VALUES (?, ?, ?)
    `;

    db.query(insertQuery, [username, password, email], (err, results) => {
        if (err) {
            console.error('Error inserting user:', err);
            return res.status(500).json({ message: 'Error registering user.' });
        }
        res.status(201).json({ message: 'User registered successfully.' });
        console.log('User registered successfully.');
    });
};


//GET USER BY ID 
const getUserById = (req, res) => {
    const userId = req.params.id;

    const selectQuery = `
        SELECT id, username, email FROM users WHERE id = ?
    `;

    db.query(selectQuery, [userId], (err, results) => {
        if (err) {
            console.error('Error fetching user:', err);
            return res.status(500).send('Error fetching user.');
        }

        if (results.length === 0) {
            return res.status(404).send('User not found.');
        }

        res.status(200).json(results[0]);
    });
};

// GET ALL USERS
const getAllUsers = (req, res) => {
    const selectQuery = `
        SELECT id, username, email FROM users
    `;

    db.query(selectQuery, (err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            return res.status(500).send('Error fetching users.');
        }

        res.status(200).json(results);
    });
};

//UPDATE USER 
const updateUser = (req, res) => {
    const userId = req.params.id;
    const { username, password, email } = req.body;



    const updateQuery = `
            UPDATE users
            SET username = ?, password = ?, email = ?
            WHERE id = ?
        `;

    db.query(updateQuery, [username, password, email, userId], (err, results) => {
        if (err) {
            console.error('Error updating user:', err);
            return res.status(500).send('Error updating user.');
        }

        if (results.affectedRows === 0) {
            return res.status(404).send('User not found.');
        }

        res.status(200).send('User updated successfully.');
    });
};

// DELETE USER BY ID

const deleteUser = (req, res) => {
    const userId = req.params.id;

    const deleteQuery = `
        DELETE FROM users WHERE id = ?
    `;

    db.query(deleteQuery, [userId], (err, results) => {
        if (err) {
            console.error('Error deleting user:', err);
            return res.status(500).send('Error deleting user.');
        }

        if (results.affectedRows === 0) {
            return res.status(404).send('User not found.');
        }

        const resetIdsQuery = `
            SET @count = 0;
            UPDATE users SET id = (@count := @count + 1);
            ALTER TABLE users AUTO_INCREMENT = 1;
        `;

        db.query(resetIdsQuery, (err, results) => {
            if (err) {
                console.error('Error resetting IDs:', err);
                return res.status(500).send('Error resetting IDs.');
            }

            res.status(200).send('User deleted and IDs reset successfully.');
        });
    });
};

// DELETE ALL USERS

const deleteAllUsers = (req, res) => {
    const deleteAllQuery = `
        DELETE FROM users;
        ALTER TABLE users AUTO_INCREMENT = 1;
    `;

    db.query(deleteAllQuery, (err, results) => {
        if (err) {
            console.error('Error deleting all users:', err);
            return res.status(500).send('Error deleting all users.');
        }

        res.status(200).send('All users deleted successfully.');
    });
};


module.exports = {
    createDatabaseAndTable,
    registerUser,
    getUserById,
    getAllUsers,
    updateUser,
    deleteUser,
    deleteAllUsers,
};
