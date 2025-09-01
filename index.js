const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Ruta para obtener ramas
app.get('/api/ramas', (req, res) => {
    // Lógica para obtener ramas
    res.send('Lista de ramas');
});

// Ruta para crear rama
app.post('/api/ramas', (req, res) => {
    const { nombre } = req.body;
    if (!nombre) {
        return res.status(400).send('El nombre es requerido');
    }
    // Lógica para crear una nueva rama
    res.status(201).send(`Rama ${nombre} creada`);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});