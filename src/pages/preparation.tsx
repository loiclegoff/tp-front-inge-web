import { BattleshipService } from '@/core/battleship.service';
import { useEffect, useState } from 'react';
import { ShipTable } from '@/components/ShipTable';
import { ShipForm } from '@/components/ShipForm';
import { Ship } from '@/types';

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
      <ShipTable ships={ships} />
      <ShipForm />
    </div>
  );
}
