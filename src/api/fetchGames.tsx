

type Game = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

type Games = {
  games: Game[];
}


async function fetchGames() {
  try {
    const response = await fetch("http://localhost:3000/api/games/list");
    const data = await response.json() as Games
    
    return data.games.map((game) => game.name);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export default fetchGames;