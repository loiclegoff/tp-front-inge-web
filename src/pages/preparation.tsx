import { BattleshipService, Ship } from '@/core/battleship.service';
import { useEffect, useState } from 'react';
import styles from '@/styles/Preparation.module.css';
import { ShipViewer } from '@/components/ShipViewer';

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
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Longueur</th>
        </tr>
      </thead>
      <tbody>
        {ships.map((ship) => (
          <ShipViewer name={ship.name} length={ship.length} />
        ))}
      </tbody>
    </table>
  );
}
