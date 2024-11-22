const Partida = require("../models/Partida");

const listarPartidas = async (req, res) => {
  try {
    const partidas = await Partida.find().populate("torneioId");
    res.json(partidas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const criarPartida = async (req, res) => {
  try {
    const partida = new Partida(req.body);
    await partida.save();
    res.status(201).json(partida);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { listarPartidas, criarPartida };
