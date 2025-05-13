

type Game = {
  id: string;
  title: string;
  year: string;
  max_players: number;
  min_players: number;
  min_time: number;
  max_time: number;
};

type Games = {
  games: Game[];
}


async function fetchGames() {
  try {
    const response = await fetch("http://localhost:3000/api/games/list");
    const data = await response.json() as Games
    
    return data.games.map((game) => game.title);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export default fetchGames;