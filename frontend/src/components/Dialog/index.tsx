"use client";
import { UserContext } from "@/context/User/context";
import { FormEvent, useContext, useRef } from "react";
import styles from "./index.module.scss";
import styles2 from "../Chat/index.module.scss";
import { Input } from "../Input";
import { Button } from "../Button";
import { Fieldset } from "../Fieldset";
import { Label } from "../Label";

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
    <dialog className={styles.dialog} open id="user-dialog" ref={null}>
      <section className={styles.dialog__body}>
        <div className={styles.dialog__close}>
          <button
            className={styles.dialog__close__button}
            onClick={handleCloseDialog}
            aria-label="fechar modal"
          >
            X
          </button>
        </div>

        <h1>Do you want a name ?</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="username">Name</Label>
          </div>
          <Fieldset>
            <Input
              placeholder="Bryan"
              name="userName"
              type="text"
              id="username"
            />
            <Button type="submit">Enviar</Button>
          </Fieldset>
        </form>
      </section>
    </dialog>
  );
};
