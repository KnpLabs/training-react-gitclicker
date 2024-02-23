// ./src/components/Game.jsx

import { useState } from 'react';
import './Game.css'
import { Gitcoin } from './Gitcoin'
import { Score } from './Score'

export function Game() {
  const [lines, setLines] = useState(0);

  const handleClick = () => {
    setLines(lines + 1);
  }

  return (
    <main className="game">
      <Score lines={lines} />
      <Gitcoin onClick={handleClick} />
    </main>
  );
}
