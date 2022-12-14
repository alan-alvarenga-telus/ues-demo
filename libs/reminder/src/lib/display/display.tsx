import styles from './display.module.css';
import {STATES, TraceableTask} from "../../index";

/* eslint-disable-next-line */
export interface DisplayProps {
  items: Array<TraceableTask>;
  state: STATES;
}

export function Display(props: DisplayProps) {
  const filtered = props.items.filter( e => e.state === props.state);
  return (
    <>
      <h2>Items in: {props.state}</h2>
      <ul>
        {filtered.map(e => <li className={styles['item']} key={e.task+'-'+props.state}>{e.task}</li>)}
      </ul>
    </>
  );
}

export default Display;
