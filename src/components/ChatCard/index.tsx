import cls from "@/utils/cls";
import styles from "./styles.module.scss";
import { activeChatId, activeRecipientId } from "@/store";

interface Props {
  userId: string;
  name: string;
  surname?: string;
  chatId: string;
}

export const ChatCard = ({ userId, name, surname, chatId }: Props) => {
  const onClickHandler = () => {
    activeChatId.value = chatId;
    activeRecipientId.value = userId;
  };

  return (
    <button
      className={cls(
        styles.container,
        chatId === activeChatId.value && styles.selected
      )}
      onClick={onClickHandler}
    >
      <div className={styles.avatar}>
        {name[0]}
        {surname?.[0]}
      </div>
      <div className={styles.fullName}>{`${name} ${surname ?? ""}`}</div>
    </button>
  );
};
