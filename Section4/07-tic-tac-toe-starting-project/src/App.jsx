import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  const toggleActivePlayer = () => {
    setActivePlayer((currActivePlayer) =>
      currActivePlayer === "X" ? "O" : "X"
    );
  };

  return (
    <main>
      <div id="game-container">
        {/* Players */}
        <ol id="players" className="highlight-player">
          <Player name="Player1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Player2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        {/* Game Board */}
        <GameBoard
          onSelectSquare={toggleActivePlayer}
          activePlayerSymbol={activePlayer}
        />
      </div>
    </main>
  );
}

export default App;
