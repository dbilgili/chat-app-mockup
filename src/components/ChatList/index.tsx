import { showUserList } from "@/store";
import { ChatCard } from "../ChatCard";
import AddIcon from "@/assets/icons/addIcon.svg?react";
import CrossIcon from "@/assets/icons/crossIcon.svg?react";
import styles from "./styles.module.scss";
import { UserList } from "../UserList";
import { useEffect, useRef } from "react";
import { getAvailableUsersToChat, getOngoingChats } from "@/helpers";

export const ChatList = () => {
  const chatCardsWrapperRef = useRef<HTMLUListElement>(null);

  const ongoingChats = getOngoingChats();
  const availableUsersToChat = getAvailableUsersToChat();

  const onNewChatClickHandler = () => {
    showUserList.value = !showUserList.value;
  };

  useEffect(() => {
    if (chatCardsWrapperRef.current) {
      chatCardsWrapperRef.current.scrollTop =
        chatCardsWrapperRef.current.scrollHeight;
    }
  }, [ongoingChats.length]);

  return (
    <div className={styles.container}>
      <ul ref={chatCardsWrapperRef} className={styles.chatCardsWrapper}>
        {ongoingChats.map((chat) => (
          <li key={chat.chatId}>
            <ChatCard
              userId={chat.user.id}
              name={chat.user.name}
              surname={chat.user.surname}
              chatId={chat.chatId}
            />
          </li>
        ))}
      </ul>
      {showUserList.value && <UserList users={availableUsersToChat} />}
      <button
        className={styles.newChatButton}
        disabled={availableUsersToChat.length === 0}
        onClick={onNewChatClickHandler}
      >
        {showUserList.value ? (
          <CrossIcon />
        ) : (
          <>
            <span>New chat</span>
            <AddIcon />
          </>
        )}
      </button>
    </div>
  );
};
