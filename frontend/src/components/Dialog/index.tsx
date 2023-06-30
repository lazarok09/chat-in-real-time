"use client";
import { UserContext } from "@/context/User/context";
import { FormEvent, useContext, useRef } from "react";
import styles from "./index.module.scss";
import styles2 from "../Chat/index.module.scss";

export const DialogComponent = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { setUser } = useContext(UserContext);

  const handleCloseDialog = () => {
    if (!dialogRef?.current) return alert("Error when closing dialog");

    dialogRef.current.close();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("userName");
    setUser({
      name: name as string,
    });
    dialogRef.current?.close();
  };

  return (
    <dialog className={styles.dialog} open id="user-dialog" ref={dialogRef}>
      <section className={styles.dialog__body}>
        <div className={styles.dialog__close}>
          <button onClick={handleCloseDialog} aria-label="fechar modal">
            X
          </button>
        </div>

        <h1>Bem vindo ao app de chat real</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className={styles2.fieldset__label} htmlFor="username">
              Insira seu nome
            </label>
          </div>
          <fieldset className={styles2.fieldset}>
            <input
              className={styles2.fieldset__input}
              placeholder="username"
              name="userName"
              type="text"
              id="username"
            />
            <button className={styles2.button} type="submit">
              Enviar
            </button>
          </fieldset>
        </form>
      </section>
    </dialog>
  );
};
