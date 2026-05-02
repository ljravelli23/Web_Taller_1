import gamesService from './games.service.js';

const gamesController = {};

gamesController.getAll = (req, res) => {
    res.status(200).json([]);
    const games = gamesService.findAll();
    res.status(200).json(games);
};

gamesController.getOne = (req, res) => {
    res.status(200).json({});
};

gamesController.create = (req, res) => {
    res.status(201).json({});
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
    const deletedGame = gamesService.delete(req.params.id);
    if (!deletedGame) {
        return res.status(404).json({ message: "No se pudo eliminar, juego no encontrado" });
    }
    res.status(200).json({
        message: "Juego retirado del catálogo",
        game: deletedGame
    });
    res.status(200).json({});
};

export default gamesController;