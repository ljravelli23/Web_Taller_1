const gamesService = {};

let games = [];
let idCounter = 1;

gamesService.findAll = () => {
    return games;
};

gamesService.update = (id, data) => {
    const index = games.findIndex(g => g.id === parseInt(id));
    if (index !== -1) {
        games[index] = { ...games[index], ...data, id: parseInt(id) };
        return games[index];
    }
    return null;
};

export default gamesService;