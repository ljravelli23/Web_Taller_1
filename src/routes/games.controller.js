import gamesService from './games.service.js';

const gamesController = {};

gamesController.getAll = (req, res) => {
    const games = gamesService.findAll();
    res.status(200).json(games);
};

gamesController.getOne = (req, res) => {
    res.status(200).json({});
};

gamesController.create = (req, res) => {
    const newGame = gamesService.create(req.body);
    res.status(201).json({
        message: "Juego registrado exitosamente",
        game: newGame
    });
};

gamesController.update = (req, res) => {
    res.status(200).json({});
};

gamesController.delete = (req, res) => {
    res.status(200).json({});
};

export default gamesController;