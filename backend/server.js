const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Poner SQL username
    password: 'admin', // Actualizar con contraseña de SQL
    database: 'cct_db'
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// --- API Endpoints ---

// GET /api/grupos
app.get('/api/grupos', (req, res) => {
    const query = 'SELECT * FROM grupos';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching groups:', err);
            res.status(500).json({ error: 'Database error' });
            return;
        }
        res.json(results);
    });
});

// GET /api/ministerios
// Requirement: Listado de Ministerios (consumo GET de la API)
// GET /api/ministerios
// Requirement: Listado de Ministerios (consumo GET de la API)
app.get('/api/ministerios', (req, res) => {
    const query = 'SELECT * FROM ministerios';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching ministerios:', err);
            res.status(500).json({ error: 'Database error' });
            return;
        }
        res.json(results);
    });
});

// POST /api/contacto
app.post('/api/contacto', (req, res) => {
    const { nombre, correo, asunto, mensaje } = req.body;
    if (!nombre || !correo || !asunto || !mensaje) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    const query = 'INSERT INTO contacto_mensajes (nombre, correo, asunto, mensaje) VALUES (?, ?, ?, ?)';
    db.query(query, [nombre, correo, asunto, mensaje], (err, result) => {
        if (err) {
            console.error('Error saving contact message:', err);
            res.status(500).json({ error: 'Database error' });
            return;
        }
        res.json({ message: 'Mensaje enviado correctamente', id: result.insertId });
    });
});

// POST /api/oracion
app.post('/api/oracion', (req, res) => {
    const { nombre, correo, telefono, motivo, desea_ser_contactado, id_ministerio } = req.body;
    if (!nombre || !correo || !telefono || !motivo || desea_ser_contactado === undefined) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    const query = 'INSERT INTO solicitudes_oracion (nombre, correo, telefono, motivo, desea_ser_contactado, id_ministerio) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(query, [nombre, correo, telefono, motivo, desea_ser_contactado, id_ministerio || null], (err, result) => {
        if (err) {
            console.error('Error saving prayer request:', err);
            res.status(500).json({ error: 'Database error' });
            return;
        }
        res.json({ message: 'Solicitud de oración enviada', id: result.insertId });
    });
});

// POST /api/registro-grupos
app.post('/api/registro-grupos', (req, res) => {
    const { nombre, correo, telefono, id_grupo, comentario } = req.body;
    if (!nombre || !correo || !telefono || !id_grupo) {
        return res.status(400).json({ error: 'Required fields missing' });
    }
    const query = 'INSERT INTO registro_grupos (nombre, correo, telefono, id_grupo, comentario) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [nombre, correo, telefono, id_grupo, comentario], (err, result) => {
        if (err) {
            console.error('Error registering for group:', err);
            res.status(500).json({ error: 'Database error' });
            return;
        }
        res.json({ message: 'Registro a grupo exitoso', id: result.insertId });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
