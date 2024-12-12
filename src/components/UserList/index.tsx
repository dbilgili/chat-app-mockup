import { User } from "@/types";
import styles from "./styles.module.scss";
import {
  activeChatId,
  activeRecipientId,
  chats,
  me,
  showUserList,
} from "@/store";

interface Props {
  users: User[];
}

export const UserList = ({ users }: Props) => {
  const onClickHandler = (userId: string) => {
    const id = crypto.randomUUID();

    chats.value = [
      ...chats.value,
      {
        id,
        participantsIds: [me.value.id, userId],
        messages: [],
      },
    ];

    activeChatId.value = id;
    activeRecipientId.value = userId;
    showUserList.value = false;
  };

  return (
    <ul className={styles.container}>
      {users.map((user) => (
        <li key={user.id} className={styles.user}>
          <button onClick={() => onClickHandler(user.id)}>
            {user.name} {user.surname}
          </button>
        </li>
      ))}
    </ul>
  );
};
