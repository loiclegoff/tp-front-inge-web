export interface ShipPosition {
  x: string; // ABCD ...
  y: number; // 1-10
  direction: 'horizontal' | 'vertical';
}

export interface Ship {
  key: string;
  length: number;
  name: string;
}
