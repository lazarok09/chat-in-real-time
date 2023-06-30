import styles from './index.module.scss'
import { RealTimeChat } from "./real";
export const Chat = () => {
  return (
    <main className={styles.main}>
      <RealTimeChat />
    </main>
  );
};
