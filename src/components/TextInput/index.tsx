import { FormEvent } from "react";
import styles from "./styles.module.scss";
import SendIcon from "@/assets/icons/sendIcon.svg?react";
import { activeChatId, chats, me } from "@/store";
import { useSignal } from "@preact/signals-react";

export const TextInput = () => {
  const message = useSignal("");

  const onChangeHandler = (e: FormEvent<HTMLInputElement>) => {
    message.value = e.currentTarget.value;
  };

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newMessage = {
      id: crypto.randomUUID(),
      chatId: activeChatId.value!,
      message: message.value,
      senderId: me.value.id,
      datetime: new Date().toISOString(),
    };

    chats.value = chats.value.map((chat) =>
      chat.id === activeChatId.value
        ? { ...chat, messages: [...chat.messages, newMessage] }
        : chat
    );

    message.value = "";
  };

  return (
    <form className={styles.container} onSubmit={onSubmitHandler} noValidate>
      <input
        name="message"
        type="text"
        value={message.value}
        onChange={onChangeHandler}
      />
      <button
        type="submit"
        className={styles.sendButton}
        disabled={message.value.length === 0}
      >
        <SendIcon />
      </button>
    </form>
  );
};
