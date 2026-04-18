exports.obtenerActividades = (req, res) => {
    res.json([
        { id: 1, nombre: "Caminata ecológica" },
        { id: 2, nombre: "Reforestación" }
    ]);
};

exports.crearActividad = (req, res) => {
    const actividad = req.body;
    res.json({
        mensaje: "Actividad creada",
        actividad
    });
};