import { BattleshipService } from '@/core/battleship.service';
import { error } from 'console';
import { ChangeEvent, useState } from 'react';

export default function Connexion() {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  function handleUsernameChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setUsername(value);
  }

  const [password, setPassword] = useState('');

  function handlePasswordChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setPassword(value);
  }

  async function handleClick() {
    try {
      await BattleshipService.login(username, password);
      setError('');
    } catch (e) {
      setError(e as string);
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={handleUsernameChange}
      ></input>
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={handlePasswordChange}
      ></input>
      <button onClick={handleClick}>Connexion</button>
      <pre>{error}</pre>
    </div>
  );
}
