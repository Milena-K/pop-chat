import { input } from "zod";
import Message from "./Message";

const Inbox = () => {
  const user = {
    name: "John Doe",
    message: "Hello, how are you?",
    time: "12:00",
    profilePic: "https://picsum.photos/200"
  };
  return (
    <div className="bg-white w-1/3 h-screen border-solid border-l border-gray-300 ">
      <div className="p-4" />
      <h1 className="text-3xl text-gray-400 pl-8">Messages</h1>
      <div className="p-6" />
      <div className="pl-8">
        <input className="rounded-full border-2 border-gray-300 w-3/4 h-10 pl-4 text-black" />
      </div>
      <div className="grid gap-0 grid-cols-1">
        <Message userInfo={user} />
        <Message userInfo={user} />
        <Message userInfo={user} />
        <Message userInfo={user} />
      </div>
    </div>
  );
};

export default Inbox;