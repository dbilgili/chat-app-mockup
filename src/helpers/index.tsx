import { activeChatId, activeRecipientId, chats, me, users } from "@/store";

export const getActiveChat = () =>
  chats.value.find((chat) => chat.id === activeChatId.value);

export const getActiveRecipeint = () =>
  users.value.find((user) => user.id === activeRecipientId.value);

export const getOngoingChats = () =>
  chats.value.flatMap((chat) => {
    const { id: chatId, participantsIds } = chat;
    if (!participantsIds.includes(me.value.id)) {
      return [];
    }

    const userId = participantsIds.find((id) => id !== me.value.id);
    const user = users.value.find((user) => user.id === userId);

    if (!user) {
      console.warn(`No matching participant found for chatId ${chatId}`);
      return [];
    }

    return { user, chatId };
  });

export const getAvailableUsersToChat = () =>
  users.value.flatMap((user) => {
    if (user.id === me.value.id) {
      return [];
    }

    const chatExists = getOngoingChats().some(
      (chat) => chat.user.id === user.id
    );
    if (chatExists) {
      return [];
    }

    return user;
  });
