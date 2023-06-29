import { Chat } from "@/components/Chat/index";
import { UserProvider } from "@/context/User";

export default function Home() {
  return (
    <UserProvider>
      <Chat />
    </UserProvider>
  );
}
