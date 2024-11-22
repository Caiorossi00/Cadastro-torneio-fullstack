const express = require("express");
const Torneio = require("../models/Torneio");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { nome, dataInicio, dataFim, descricao, participantes } = req.body; // Desestruturar os campos

    if (!nome || !dataInicio || !dataFim || !descricao) {
      return res
        .status(400)
        .json({ message: "Todos os campos são obrigatórios" });
    }

    const torneio = new Torneio({
      nome,
      dataInicio,
      dataFim,
      descricao,
      participantes: participantes || [],
    });

    await torneio.save();
    res.status(201).json(torneio);
  } catch (err) {
    res.status(500).json({ message: "Erro ao criar torneio", error: err });
  }
});

router.get("/", async (req, res) => {
  try {
    const torneios = await Torneio.find();
    res.status(200).json(torneios);
  } catch (err) {
    res.status(500).json({ message: "Erro ao listar torneios", error: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const torneio = await Torneio.findByIdAndDelete(req.params.id);
    if (!torneio) {
      return res.status(404).json({ message: "Torneio não encontrado" });
    }
    res.status(200).json({ message: "Torneio excluído com sucesso" });
  } catch (err) {
    res.status(500).json({ message: "Erro ao excluir torneio", error: err });
  }
});

module.exports = router;
