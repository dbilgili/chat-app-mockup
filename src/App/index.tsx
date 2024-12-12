import { ChatList } from "@/components/ChatList";
import { ChatWindow } from "@/components/ChatWindow";
import styles from "./styles.module.scss";

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <ChatList />
        <ChatWindow />
      </div>
    </div>
  );
};

export default App;
