const Torneio = require("../models/Torneio");

const listarTorneios = async (req, res) => {
  try {
    const torneios = await Torneio.find();
    res.json(torneios);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const criarTorneio = async (req, res) => {
  try {
    const torneio = new Torneio(req.body);
    await torneio.save();
    res.status(201).json(torneio);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { listarTorneios, criarTorneio };
