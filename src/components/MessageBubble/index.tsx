import dayjs from "dayjs";
import cls from "@/utils/cls";
import styles from "./styles.module.scss";
import { MessageOrigin } from "@/types";

interface Props {
  message: string;
  datetime: string;
  origin: MessageOrigin;
}

export const MessageBubble = ({ message, datetime, origin }: Props) => (
  <div
    className={cls(
      styles.container,
      origin === MessageOrigin.Received ? styles.received : styles.sent
    )}
  >
    <div
      className={cls(
        styles.message,
        origin === MessageOrigin.Received ? styles.received : styles.sent
      )}
    >
      {message}
      <span className={styles.timeStamp}>
        {dayjs(datetime).format("HH:mm")}
      </span>
    </div>
  </div>
);
