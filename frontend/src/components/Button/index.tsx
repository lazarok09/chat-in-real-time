import { ButtonHTMLAttributes } from "react";
import styles from "./index.module.scss";

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button {...props} className={`${styles.button} ${props.className}`} />;
};
