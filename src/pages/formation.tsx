import { ShipViewer } from '@/components/ShipViewer';
import { Ship } from '@/types';
import { useState } from 'react';

const ships: Ship[] = [
  {
    key: 'navire-1',
    length: 5,
    name: 'Calypso',
  },
  {
    key: 'navire-2',
    length: 2,
    name: 'Santa Maria',
  },
];

interface ShipElementProps {
  ship: Ship;
}
function ShipElement(props: ShipElementProps) {
  return <p>{props.ship.name}</p>;
}

export default function Formation() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      Hello n°{count}
      <button onClick={handleClick}>+</button>
      {ships.map((currentShip) => (
        <ShipElement ship={currentShip} />
      ))}
    </div>
  );
}
