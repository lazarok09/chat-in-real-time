import { DialogComponent } from "../Dialog";
import styles from "./index.module.scss";
import { RealTimeChat } from "./real";
export const Chat = () => {
  return (
    <div>
      <h1 className={styles.man}>Hello World</h1>
      <DialogComponent />
      <RealTimeChat />
    </div>
  );
};
