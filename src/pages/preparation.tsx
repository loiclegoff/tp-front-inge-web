import { BattleshipService, Ship } from '@/core/battleship.service';
import { useEffect, useState } from 'react';

interface ShipViewerProps {
  length: number;
  name: string;
}

function ShipViewer(props: ShipViewerProps) {
  return <div>{props.name}</div>;
}

export default function Preparation() {
  const [ships, setShips] = useState<Ship[]>([]);

  useEffect(() => {
    async function getShips() {
      const currentShips = await BattleshipService.getShips();
      setShips(currentShips);
    }

    getShips();
  }, []);

  return (
    <div>
      {ships.map((ship) => (
        <ShipViewer name={ship.name} length={ship.length} />
      ))}
    </div>
  );
}
