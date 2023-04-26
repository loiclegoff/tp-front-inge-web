import { BattleshipService } from '@/core/battleship.service';
import { useEffect, useState } from 'react';

export default function Preparation() {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    async function getShips() {
      const currentShips = await BattleshipService.getShips();
      setShips(currentShips);
    }

    getShips();
  }, []);

  return <div>{JSON.stringify(ships)}</div>;
}
