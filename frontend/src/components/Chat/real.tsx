"use client";
import { FormEvent, useEffect, useRef, useState } from "react";
import io from "socket.io-client";
let socket;
import styles from "./index.module.scss";

import { MessageComponent } from "../Message";

export const RealTimeChat = () => {
  const [input, setInput] = useState("");
  const messagesRef = useRef<HTMLTextAreaElement>(null);
  const [submiting, setSubmiting] = useState(false);
  const [messages, setMessages] = useState([
    <MessageComponent msg={"hello world"} />,
  ]);

  useEffect(() => {
    const socketInitializer = async () => {
      socket = io("http://localhost:3001");

      socket.on("connect", () => {
        console.log("connected");
      });
      socket.on("chat message", function (msg: string) {
        setMessages((old) => [...old, <MessageComponent msg={msg} />]);
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
      setSubmiting(false);
      return socket.emit("chat message", input);
    }
    setSubmiting(false);
    console.error("no data in input value");
  };

  return (
    <section>
      <h2>Chat</h2>
      <article id="messages" className={styles.fonts} ref={messagesRef}>
        Mensagens aqui
        {messages.map((message) => message)}
      </article>

      <form onSubmit={handleSubmit} className={styles.square}>
        <fieldset className={styles.fonts}>
          <input
            placeholder="Type something"
            value={input}
            className={styles.fonts}
            onChange={onChangeHandler}
          />
          <button className={styles.fonts} disabled={submiting}>
            {submiting ? "Enviando" : "Enviar"}
          </button>
        </fieldset>
      </form>
    </section>
  );
};
