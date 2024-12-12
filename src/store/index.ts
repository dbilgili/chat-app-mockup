import { Chat, ChatMessage, User } from "@/types";
import { signal } from "@preact/signals-react";
import {
  initialChats,
  initialMe,
  initialMessages,
  initialUsers,
} from "./initialValues";

export const me = signal<User>(initialMe);
export const users = signal<User[]>(initialUsers);
export const chats = signal<Chat[]>(initialChats);
export const messages = signal<ChatMessage[]>(initialMessages);
export const activeChatId = signal<string | null>(null);
export const activeRecipientId = signal<string | null>(null);
export const showUserList = signal<boolean>(false);
