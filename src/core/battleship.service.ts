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

  static async login(username: string, password: string) {
    const resp = await fetch('/api/auth/authorize', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${username} ${password}`,
      },
    });

    const data = await resp.json();

    if (resp.status === 400) {
      return Promise.reject(data.error);
    }

    console.log(data.access_token);
  }
}
