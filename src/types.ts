export enum MessageOrigin {
  Sent = "sent",
  Received = "received",
}

export type User = {
  id: string;
  name: string;
  surname?: string;
};

export type ChatMessage = {
  id: string;
  chatId: string;
  message: string;
  senderId: string;
  datetime: string;
};

export type Chat = {
  id: string;
  messages: ChatMessage[];
  participantsIds: string[];
};
