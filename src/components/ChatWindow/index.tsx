import { useEffect, useRef } from "react";
import { MessageOrigin } from "@/types";
import { MessageBubble } from "../MessageBubble";
import { TextInput } from "../TextInput";
import { activeChatId, me } from "@/store";
import PeopleIcon from "@/assets/icons/peopleIcon.svg?react";
import styles from "./styles.module.scss";
import { getActiveChat, getActiveRecipeint } from "@/helpers";

export const ChatWindow = () => {
  const messagesRef = useRef<HTMLDivElement>(null);

  const activeChat = getActiveChat();
  const activeRecipeint = getActiveRecipeint();

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [activeChat?.messages]);

  if (!activeChatId.value) {
    return (
      <div className={styles.container}>
        <div className={styles.instructionMessage}>
          <PeopleIcon width={50} height={50} />
          <p>Select a chat to start messaging</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div ref={messagesRef} className={styles.messages}>
        {activeChat?.messages.length === 0 && (
          <div className={styles.miniInstructionMessage}>
            <p>
              {`Start a conversation with ${activeRecipeint?.name} ${
                activeRecipeint?.surname ?? ""
              }`}
            </p>
          </div>
        )}
        {activeChat?.messages.map(({ id, message, datetime, senderId }) => (
          <MessageBubble
            key={id}
            message={message}
            datetime={datetime}
            origin={
              senderId === me.value.id
                ? MessageOrigin.Sent
                : MessageOrigin.Received
            }
          />
        ))}
      </div>
      <div className={styles.input}>
        <TextInput />
      </div>
    </div>
  );
};
