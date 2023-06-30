"use client";
import React, {
  ChangeEvent,
  FormEvent,
  Suspense,
  useContext,
  useEffect,
  useState,
} from "react";

import io, { Socket } from "socket.io-client";
let socket: Socket;
import styles from "./index.module.scss";

import { MessageComponent } from "../Message";
import { UserContext } from "@/context/User/context";

export const RealTimeChat = () => {
  const [input, setInput] = useState("");
  const [submiting, setSubmiting] = useState(false);
  const [messages, setMessages] = useState<JSX.Element[]>([]);
  const { user } = useContext(UserContext);
  useEffect(() => {
    const socketInitializer = async () => {
      socket = io("http://localhost:3001");

      socket.on("connect", () => {
        console.log("connected");
      });
      socket.on("chat message", function (data: IOMessage) {
        setMessages((old) => [
          ...old,
          <MessageComponent {...data} key={data.userName} />,
        ]);
        window.scrollTo(0, document.body.scrollHeight);
      });
    };

    socketInitializer();
  }, []);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setSubmiting(true);

    if (!!input?.length) {
      console.info(`Emited chat message  with value ${input}`);

      setInput("");

      const message: IOMessage = {
        message: input,
        userName: user.name,
      };

      setSubmiting(false);

      return socket.emit("chat message", message);
    }

    setSubmiting(false);
    console.error("no data in input value");
  };

  return (
    <section className={styles.section}>
      <article>
        Mensagens aqui
        {messages.map((message) => message)}
      </article>

      <form onSubmit={handleSubmit} className={styles.square}>
        <fieldset className={`${styles.fieldset}`}>
          <input
            placeholder="Envie sua mensagem"
            value={input}
            className={`${styles.fieldset__input}`}
            onChange={onChangeHandler}
          />
          <button className={styles.button} disabled={submiting}>
            {submiting ? "Enviando" : "Enviar"}
          </button>
        </fieldset>
      </form>
    </section>
  );
};
