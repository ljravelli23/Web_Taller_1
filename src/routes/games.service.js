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

export default gamesService;