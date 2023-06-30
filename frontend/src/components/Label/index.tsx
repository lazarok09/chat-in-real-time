import { LabelHTMLAttributes } from "react";
import styles from "./index.module.scss";
export const Label = (props: LabelHTMLAttributes<HTMLLabelElement>) => {
  return <label {...props} className={styles.label} />;
};
