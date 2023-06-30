import { FieldsetHTMLAttributes } from "react";
import styles from "./index.module.scss";

export const Fieldset = (
  props: FieldsetHTMLAttributes<HTMLFieldSetElement>
) => {
  return (
    <fieldset {...props} className={`${styles.fieldset} ${props.className}`} />
  );
};
