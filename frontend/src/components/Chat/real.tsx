"use client";
import { FormEvent, Suspense, useEffect, useRef, useState } from "react";
import io from "socket.io-client";
let socket;
import styles from "./index.module.scss";

import { MessageComponent } from "../Message";

export const RealTimeChat = () => {
  const [input, setInput] = useState("");
  const [submiting, setSubmiting] = useState(false);
  const [messages, setMessages] = useState([]);

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

  const onChangeHandler = (e) => {
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
        userName: "lazarok09",
      };

      setSubmiting(false);
      return socket.emit("chat message", message);
    }

    setSubmiting(false);
    console.error("no data in input value");
  };

  return (
    <section className={styles.section}>
      <Suspense fallback={<h2>Loading...</h2>}>
        <article>
          Mensagens aqui
          {messages.map((message) => message)}
        </article>
      </Suspense>

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
