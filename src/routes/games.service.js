const gamesService = {};

let games = [];
let idCounter = 1;

gamesService.findAll = () => {
    return games;
};

gamesService.create = (data) => {
    const newGame = {
        id: idCounter++,
        name: data.name,
        minPlayers: data.minPlayers,
        maxPlayers: data.maxPlayers,
        avgDuration: data.avgDuration,
        acquisitionDate: data.acquisitionDate,
        status: data.status
    };
    games.push(newGame);
    return newGame;
};

gamesService.findById = (id) => {
    return games.find(g => g.id === parseInt(id));
};

gamesService.update = (id, data) => {
    const index = games.findIndex(g => g.id === parseInt(id));
    if (index !== -1) {
        games[index] = { ...games[index], ...data, id: parseInt(id) };
        return games[index];
    }
    return null;
};

gamesService.delete = (id) => {
    const index = games.findIndex(g => g.id === parseInt(id));
    if (index !== -1) {
        return games.splice(index, 1)[0];
    }
    return null;
};

export default gamesService;