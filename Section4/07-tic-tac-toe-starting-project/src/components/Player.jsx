import { useState } from "react";

function Player({ name, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const handleNameChange = (event) => {
    setPlayerName(event.target.value);
  };

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {isEditing ? (
          <input type="text" value={playerName} onChange={handleNameChange} />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditToggle}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;
