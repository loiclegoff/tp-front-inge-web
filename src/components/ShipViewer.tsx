import styles from '@/styles/Preparation.module.css';

interface ShipViewerProps {
  length: number;
  name: string;
}

export function ShipViewer(props: ShipViewerProps) {
  const text = `${props.length} cases`;
  return (
    <tr className={styles.line}>
      <td className={styles.case}>
        <p className={styles.shipName}>{props.name}</p>
      </td>
      <td>
        <div className={styles.tag}>{text}</div>
      </td>
    </tr>
  );
}
