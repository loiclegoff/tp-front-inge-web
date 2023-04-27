import { Ship, ShipPosition } from '@/types';

export class BattleshipService {
  static async getShips() {
    // https://monurl/api/reference/ships

    const resp = await fetch('/api/reference/ships');
    const data = await resp.json();
    return data as Ship[];
  }

  static async addShipPosition(
    gameId: string,
    position: ShipPosition
  ) {
    await fetch('/api/games/' + gameId + '/ships', {
      method: 'POST',
      body: JSON.stringify(position),
    });
  }
}
