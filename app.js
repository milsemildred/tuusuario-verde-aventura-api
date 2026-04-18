const express = require('express');
const app = express();

app.use(express.json());

// Rutas
const usuariosRoutes = require('./routes/usuarios.routes');
const actividadesRoutes = require('./routes/actividades.routes');
const reservasRoutes = require('./routes/reservas.routes');

app.use('/usuarios', usuariosRoutes);
app.use('/actividades', actividadesRoutes);
app.use('/reservas', reservasRoutes);

// Ruta principal
app.get('/', (req, res) => {
    res.send('API Verde Aventura funcionando 🚀');
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});