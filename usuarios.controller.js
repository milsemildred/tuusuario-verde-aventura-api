exports.obtenerUsuarios = (req, res) => {
    res.json([
        { id: 1, nombre: "Ana" },
        { id: 2, nombre: "Carlos" }
    ]);
};

exports.crearUsuario = (req, res) => {
    const usuario = req.body;
    res.json({
        mensaje: "Usuario creado correctamente",
        usuario: usuario
    });
};