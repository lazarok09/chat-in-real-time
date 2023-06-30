import { InputHTMLAttributes } from "react";
import styles from "./index.module.scss";
export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <input {...props} className={styles.input} />;
};
