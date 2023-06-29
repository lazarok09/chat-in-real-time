import Image from "next/image";
import styles from "./Message.module.scss";

const USER_NAMES = ["Tristan", "Robson", "Martinho Lutero"];

async function getRandomImage(): Promise<UnsplashRandomPhoto> {
  try {
    return fetch(`${process.env.NEXT_PUBLIC_UNSPLASH_API_URL}/photos/random`, {
      headers: {
        Accept: "application/json",
        Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_KEY}`,
      },
    })
      .then((response) => response)
      .then((data) => data.json());
  } catch (e) {
    console.error(e);
    throw e;
  }
}
async function getRandom(): Promise<UnsplashRandomPhoto> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("acabou");
      resolve({
        urls: {
          full: null,
          raw: null,
          regular: null,
          small: null,
          thumb: null,
          small_s3:
            "data:image/png;base64,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",
        },
      });
    }, 1500);
  });
}

export const MessageComponent = async ({ message, userName }: IOMessage) => {
  const data = await getRandom();

  if (!data) return null;

  return (
    <article className={styles.message}>
      <Image
        height={30}
        width={30}
        src={data.urls.small_s3}
        alt="user"
        className={styles.image}
      />
      <span className={styles.message__title}>{userName}</span>
      <p className={styles.message__text}>{message}</p>
    </article>
  );
};
