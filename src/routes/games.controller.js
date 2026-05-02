import gamesService from './games.service.js';

const gamesController = {};

gamesController.getAll = (req, res) => {
    const games = gamesService.findAll();
    res.status(200).json(games);
    res.status(200).json([]);
};

gamesController.getOne = (req, res) => {
    res.status(200).json({});
    const game = gamesService.findById(req.params.id);
    if (!game) {
        return res.status(404).json({ message: "Juego no encontrado" });
    }
    res.status(200).json(game);
};

gamesController.create = (req, res) => {
    res.status(201).json({});
};

gamesController.update = (req, res) => {
    res.status(200).json({});
};

gamesController.delete = (req, res) => {
    res.status(200).json({});
};

export default gamesController;
