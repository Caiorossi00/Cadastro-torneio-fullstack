const express = require("express");
const Partida = require("../models/Partida");
const router = express.Router();

router.post("/", async (req, res) => {
  const { torneio, timeA, timeB, golsTimeA, golsTimeB, data } = req.body;
  try {
    const partida = new Partida({
      torneio,
      timeA,
      timeB,
      golsTimeA,
      golsTimeB,
      data,
    });
    await partida.save();
    res.status(201).json(partida);
  } catch (error) {
    res.status(400).json({ message: "Erro ao criar partida" });
  }
});

router.get("/:torneioId", async (req, res) => {
  const { torneioId } = req.params;
  try {
    const partidas = await Partida.find({ torneio: torneioId });
    res.status(200).json(partidas);
  } catch (error) {
    res.status(500).json({ message: "Erro ao obter partidas" });
  }
});

module.exports = router;
