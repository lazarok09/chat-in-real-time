import Image from "next/image";
import styles from "./index.module.scss";

const Icon = "/user.png";

export const MessageComponent = ({ message, userName }: IOMessage) => {
  return (
    <article className={styles.message}>
      <Image
        height={30}
        width={30}
        src={Icon}
        alt="user"
        className={styles.image}
      />
      {userName && <span className={styles.message__title}>{userName}</span>}
      <p className={styles.message__text}>{message}</p>
    </article>
  );
};
