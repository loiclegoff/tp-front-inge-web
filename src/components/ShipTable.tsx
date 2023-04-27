import { Ship } from '@/types';
import { ShipViewer } from './ShipViewer';
import styles from '@/styles/Preparation.module.css';

interface ShipTableProps {
  ships: Ship[];
}

export function ShipTable(props: ShipTableProps) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Longueur</th>
        </tr>
      </thead>
      <tbody>
        {props.ships.map((ship) => (
          <ShipViewer name={ship.name} length={ship.length} />
        ))}
      </tbody>
    </table>
  );
}
