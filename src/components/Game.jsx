import { useState } from "react";
import { Gitcoin } from "./Gitcoin";
import { Score } from "./Score";
import { Store } from "./Store";
import "./Game.css";

export function Game() {
  const [lines, setLines] = useState(0);

  const handleClick = () => {
    setLines(lines + 1);
  };

  return (
    <main className="game">
      <Score lines={lines} />
      <Gitcoin onClick={handleClick} />
      <Store lines={lines} />
    </main>
  );
}
