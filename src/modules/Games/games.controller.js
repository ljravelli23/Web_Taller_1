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
    res.status(201).json({});
};

gamesController.update = (req, res) => {
    const updatedGame = gamesService.update(req.params.id, req.body);
    if (!updatedGame) {
        return res.status(404).json({ message: "No se pudo actualizar, juego no encontrado" });
    }
    res.status(200).json({
        message: "Juego actualizado con éxito",
        game: updatedGame
    });
};

gamesController.delete = (req, res) => {
    res.status(200).json({});
};

export default gamesController;