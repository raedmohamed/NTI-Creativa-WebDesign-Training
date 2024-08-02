const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const players1 = game.players[0];
const players2 = game.players[1];

const gk = players1[0];
const fieldPlayers = players1.slice(1);

const allPlayers = [...players1, ...players2];

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

const { team1, x: draw, team2 } = game.odds;

const printGoals = (...players) => {
  players.forEach(player => console.log(player));
  console.log(`Total goals scored: ${players.length}`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

const likelyWinner = (team1 < team2) && game.team1 || (team2 < team1) && game.team2;
console.log(`Team more likely to win: ${likelyWinner}`);

game.scored.forEach((player, index) => {
  console.log(`Goal ${index + 1}: ${player}`);
});

const odds = Object.values(game.odds);
const averageOdd = odds.reduce((acc, odd) => acc + odd, 0) / odds.length;
console.log(`Average odd: ${averageOdd}`);

console.log(`Odd of victory ${game.team1}: ${team1}`);
console.log(`Odd of draw: ${draw}`);
console.log(`Odd of victory ${game.team2}: ${team2}`);

const scorers = game.scored.reduce((acc, player) => {
  acc[player] = (acc[player] || 0) + 1;
  return acc;
}, {});
console.log(scorers);
