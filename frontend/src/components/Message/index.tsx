import Image from "next/image";
import styles from "./Message.module.scss";

export const MessageComponent = ({ msg }: { msg: string }) => {
  return (
    <div className={styles.message}>
      <Image
        height={30}
        width={30}
        src={`https://source.unsplash.com/featured/300x201`}
        alt="user"
        className={styles.image}
      />
      {msg}
    </div>
  );
};
