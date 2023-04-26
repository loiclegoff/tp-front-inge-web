export interface Ship {
  key: string;
  length: number;
  name: string;
}
export class BattleshipService {
  static async getShips() {
    // https://monurl/api/reference/ships

    const resp = await fetch('/api/reference/ships');
    const data = await resp.json();
    return data as Ship[];
  }
}
