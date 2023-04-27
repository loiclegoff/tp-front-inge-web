import {
  Button,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';

const xValues = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
const yValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function ShipForm() {
  const [value, setValue] = useState('horizontal');
  const [x, setX] = useState<string>('a');
  const [y, setY] = useState<number>(1);

  function handleClick() {
    alert('mon message: ' + value + 'x: ' + x + 'y: ' + y);
  }

  function handleXClick(e: ChangeEvent<HTMLSelectElement>) {
    setX(e.target.value);
  }

  function handleYChange(e: ChangeEvent<HTMLSelectElement>) {
    setY(Number(e.target.value));
  }

  return (
    <VStack width={200}>
      <div>
        value : ({x}, {y})
      </div>
      <Select
        placeholder="Select X"
        value={x}
        onChange={handleXClick}
      >
        {xValues.map((xValue) => (
          <option value={xValue}>{xValue}</option>
        ))}
      </Select>
      <Select
        placeholder="Select Y"
        value={y}
        onChange={handleYChange}
      >
        {yValues.map((yValue) => (
          <option value={yValue}>{yValue}</option>
        ))}
      </Select>{' '}
      <RadioGroup onChange={setValue} value={value}>
        <Stack direction="row">
          <Radio value="horizontal">Horizontal</Radio>
          <Radio value="vertical">Vertical</Radio>
        </Stack>
      </RadioGroup>
      <Button onClick={handleClick}>Enregistrer</Button>
    </VStack>
  );
}
