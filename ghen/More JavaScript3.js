let games = {
   Dota: 10,
   CS: 8,
   Wow: 6
};

function GameRate(obj) {
   console.log('Best games: ' + Object.getOwnPropertyNames(obj));
   console.log('Game rates: ' + Object.values(obj));
}
GameRate(games);