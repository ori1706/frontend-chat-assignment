"use client";
import { useState } from "react";
import AllChats from "./components/AllChats";
import SingleChat from "./components/SingleChat";

export default function Home() {
  const [displayedChatId, setDisplayedChatId] = useState<string | null>(null);

  return (
    <div className="flex flex-row h-screen">
      <div className="w-[312px] border-r border-gray-200">
        <AllChats setDisplayedChatId={setDisplayedChatId} />
      </div>
      {displayedChatId && <SingleChat chatId={displayedChatId} />}
    </div>
  );
}
