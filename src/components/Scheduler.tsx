import { useState } from 'react';
import './App.css';
import fetchGames from '../api/fetchGames';

const games = await fetchGames();

function Scheduler() {
  const [selectedGame, setSelectedGame] = useState<string>("");
  const [votes, setVotes] = useState<Record<string, string[]>>({});

  const handleVote = (game: string, date: string) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [game]: [...(prevVotes[game] || []), date],
    }));
  };

  return (
    <div className="container">
      <h1>Board Game Night Scheduler</h1>

      <div className="games-container">
        {games.map((game) => (
          <Game key={game} game={game} selectedGame={selectedGame} setSelectedGame={setSelectedGame} />
        ))}
      </div>

      {selectedGame && (
        <div className="vote-section">
          <h2>Vote for a Time for "{selectedGame}"</h2>
          <input
            type="datetime-local"
            onChange={(e) => handleVote(selectedGame, e.target.value)}
          />
          <ul>
            {votes[selectedGame]?.map((vote, index) => (
              <li key={index}>{new Date(vote).toLocaleString()}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Game = ({ game, selectedGame, setSelectedGame }) => {
  return <div key={game}
              className={`game-card ${selectedGame === game ? "selected" : ""}`}
              onClick={() => setSelectedGame(game)}>
         {game}
         </div>
}

export default Scheduler;