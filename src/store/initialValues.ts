import { Chat, ChatMessage, User } from "@/types";

export const initialMe: User = { id: "user1", name: "Alice" };

export const initialUsers: User[] = [
  { id: "user1", name: "Alice" },
  { id: "user2", name: "Bob" },
  { id: "user3", name: "Christopher", surname: "Conte" },
  { id: "user4", name: "Charlie", surname: "Doe" },
  { id: "user5", name: "Diana" },
  { id: "user6", name: "Eve", surname: "Smith" },
  { id: "user7", name: "Frank" },
  { id: "user8", name: "Grace" },
  { id: "user9", name: "Hank" },
  { id: "user10", name: "Isabella", surname: "Johnson" },
  { id: "user11", name: "Jack" },
  { id: "user12", name: "Karen" },
  { id: "user13", name: "Liam" },
  { id: "user14", name: "Mia" },
  { id: "user15", name: "Noah" },
  { id: "user16", name: "Olivia" },
  { id: "user17", name: "Peter" },
  { id: "user18", name: "Quinn" },
  { id: "user19", name: "Ruby" },
  { id: "user20", name: "Sophia" },
];

export const initialMessages: ChatMessage[] = [
  // Chat 1: Alice and Bob
  {
    id: "msg1",
    chatId: "chat1",
    message: "Hi Bob, did you finalize the team meeting agenda?",
    senderId: "user1",
    datetime: "2024-12-11T09:00:00Z",
  },
  {
    id: "msg2",
    chatId: "chat1",
    message: "Hey Alice, yes. I’ve shared it with the team already.",
    senderId: "user2",
    datetime: "2024-12-11T09:02:00Z",
  },
  {
    id: "msg3",
    chatId: "chat1",
    message: "Great! Let me know if there are any updates.",
    senderId: "user1",
    datetime: "2024-12-11T09:05:00Z",
  },
  {
    id: "msg4",
    chatId: "chat1",
    message: "Will do. Thanks for checking in!",
    senderId: "user2",
    datetime: "2024-12-11T09:06:00Z",
  },

  // Chat 2: Alice and Christopher
  {
    id: "msg5",
    chatId: "chat2",
    message: "Hi Chris, did you have a chance to review the presentation?",
    senderId: "user1",
    datetime: "2024-12-11T10:00:00Z",
  },
  {
    id: "msg6",
    chatId: "chat2",
    message: "Hi Alice, yes. Looks good, but slide 5 needs more detail.",
    senderId: "user3",
    datetime: "2024-12-11T10:02:00Z",
  },
  {
    id: "msg7",
    chatId: "chat2",
    message: "Thanks, I’ll update that. Anything else?",
    senderId: "user1",
    datetime: "2024-12-11T10:05:00Z",
  },
  {
    id: "msg8",
    chatId: "chat2",
    message: "No, the rest looks perfect. Nice work!",
    senderId: "user3",
    datetime: "2024-12-11T10:07:00Z",
  },

  // Chat 3: Alice and Diana
  {
    id: "msg9",
    chatId: "chat3",
    message: "Hi Diana, are we on track for the budget report?",
    senderId: "user1",
    datetime: "2024-12-11T11:00:00Z",
  },
  {
    id: "msg10",
    chatId: "chat3",
    message: "Hey Alice, yes. Just need to finalize a few numbers.",
    senderId: "user5",
    datetime: "2024-12-11T11:05:00Z",
  },
  {
    id: "msg11",
    chatId: "chat3",
    message: "Great. Let me know if you need help with anything.",
    senderId: "user1",
    datetime: "2024-12-11T11:10:00Z",
  },
  {
    id: "msg12",
    chatId: "chat3",
    message: "Will do, thanks Alice.",
    senderId: "user5",
    datetime: "2024-12-11T11:12:00Z",
  },

  // Chat 4: Alice and Eve
  {
    id: "msg13",
    chatId: "chat4",
    message: "Hi Eve, how’s the event planning going?",
    senderId: "user1",
    datetime: "2024-12-11T12:00:00Z",
  },
  {
    id: "msg14",
    chatId: "chat4",
    message: "Hi Alice, it’s on track. I’m working on the guest list now.",
    senderId: "user6",
    datetime: "2024-12-11T12:02:00Z",
  },
  {
    id: "msg15",
    chatId: "chat4",
    message: "Let me know if you need help with invitations.",
    senderId: "user1",
    datetime: "2024-12-11T12:05:00Z",
  },
  {
    id: "msg16",
    chatId: "chat4",
    message: "Thanks! I’ll ping you if I do.",
    senderId: "user6",
    datetime: "2024-12-11T12:07:00Z",
  },

  // Chat 5: Alice and Grace
  {
    id: "msg17",
    chatId: "chat5",
    message: "Hi Grace, are the designs ready for client review?",
    senderId: "user1",
    datetime: "2024-12-11T13:00:00Z",
  },
  {
    id: "msg18",
    chatId: "chat5",
    message: "Hi Alice, yes! I’ll share them with you shortly.",
    senderId: "user8",
    datetime: "2024-12-11T13:05:00Z",
  },
  {
    id: "msg19",
    chatId: "chat5",
    message: "Perfect. I’ll take a look and send feedback.",
    senderId: "user1",
    datetime: "2024-12-11T13:10:00Z",
  },
  {
    id: "msg20",
    chatId: "chat5",
    message: "No rush though, take your time :)",
    senderId: "user1",
    datetime: "2024-12-11T13:10:00Z",
  },
  {
    id: "msg21",
    chatId: "chat5",
    message: "Thanks! Looking forward to hearing your thoughts.",
    senderId: "user8",
    datetime: "2024-12-11T13:15:00Z",
  },
];

export const initialChats: Chat[] = [
  {
    id: "chat1",
    participantsIds: ["user1", "user2"],
    messages: initialMessages.filter((msg) => msg.chatId === "chat1"),
  },
  {
    id: "chat2",
    participantsIds: ["user1", "user3"],
    messages: initialMessages.filter((msg) => msg.chatId === "chat2"),
  },
  {
    id: "chat3",
    participantsIds: ["user1", "user5"],
    messages: initialMessages.filter((msg) => msg.chatId === "chat3"),
  },
  {
    id: "chat4",
    participantsIds: ["user1", "user6"],
    messages: initialMessages.filter((msg) => msg.chatId === "chat4"),
  },
  {
    id: "chat5",
    participantsIds: ["user1", "user8"],
    messages: initialMessages.filter((msg) => msg.chatId === "chat5"),
  },
];
