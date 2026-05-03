import gamesService from './games.service.js';

const gamesController = {};

gamesController.getAll = (req, res) => {
    const games = gamesService.findAll();
    res.status(200).json(games);
};

gamesController.getOne = (req, res) => {
    const game = gamesService.findById(req.params.id);
    if (!game) {
        return res.status(404).json({ message: "Juego no encontrado" });
    }
    res.status(200).json(game);
};

gamesController.create = (req, res) => {
    const newGame = gamesService.create(req.body);
    res.status(201).json({
        message: "Juego registrado exitosamente",
        game: newGame
    });
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
    const deletedGame = gamesService.delete(req.params.id);
    if (!deletedGame) {
        return res.status(404).json({ message: "No se pudo eliminar, juego no encontrado" });
    }
    res.status(200).json({
        message: "Juego retirado del catálogo",
        game: deletedGame
    });
};

export default gamesController;