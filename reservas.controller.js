exports.obtenerReservas = (req, res) => {
    res.json([
        { id: 1, usuario: "Ana", actividad: "Caminata ecológica" }
    ]);
};

exports.crearReserva = (req, res) => {
    const reserva = req.body;
    res.json({
        mensaje: "Reserva creada",
        reserva
    });
};