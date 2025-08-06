"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { IChat, IChatPreview } from "../types";
import ContactBox from "./ContactBox";
import Loader from "./Loader";

export default function AllChats({ setDisplayedChatId }: { setDisplayedChatId: (chatId: string) => void }) {


    const [chats, setChats] = useState<IChatPreview[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const chatListRef = useRef<HTMLDivElement>(null);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [debouncedSearch, setDebouncedSearch] = useState("");

    useEffect(() => {
        if (searchTimeoutRef.current) {
            clearTimeout(searchTimeoutRef.current);
        };

        searchTimeoutRef.current = setTimeout(() => {
            setDebouncedSearch(search);
            setPage(1);
            setChats([]);
        }, 500);

        return () => {
            if (searchTimeoutRef.current) {
                clearTimeout(searchTimeoutRef.current);
            }
        };
    }, [search]);

    const fetchChats = useCallback(async (page: number, search: string) => {
        setIsLoading(true);
        try {
            const response = await fetch(`/api/chats?page=${page}&pageSize=15&search=${search}`);
            const data = await response.json();
            setChats((prev) => [...prev, ...data.chats]);
        } catch (error) {
            console.error("Error fetching chats:", error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (chatListRef.current) {
                if (chatListRef.current.scrollTop >= chatListRef.current.scrollHeight - chatListRef.current.clientHeight) {
                    setPage((prev) => prev + 1);
                }
            }
        };

        const chatListElem = chatListRef.current;
        if (chatListElem) {
            chatListElem.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (chatListElem) {
                chatListElem.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    useEffect(() => {
        fetchChats(page, debouncedSearch);
    }, [page, debouncedSearch, fetchChats]);


    return (
        <div style={{ padding: "10px", height: "100vh", overflowY: "hidden" }}>
            <div style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "16px"
            }}>
                <div style={{
                    position: "relative",
                    width: "100%",
                    maxWidth: "260px"
                }}>
                    <input
                        type="text"
                        placeholder="Search..."
                        style={{
                            width: "100%",
                            padding: isLoading ? "10px 50px 10px 20px" : "10px 20px",
                            borderRadius: "999px",
                            border: "1px solid #ccc",
                            outline: "none",
                            fontSize: "16px",
                        }}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    {isLoading && (
                        <Loader
                            position="absolute"
                            right="15px"
                            top="50%"
                            transform="translateY(-50%)"
                        />
                    )}
                </div>
            </div>
            <div
                ref={chatListRef}
                style={{
                    overflowY: "scroll",
                    display: "flex",
                    height: "100%",
                    flexDirection: "column",
                    gap: "10px",
                    position: "relative"
                }}>
                {(chats ?? []).map((chat) => <ContactBox key={chat.id} chat={chat} setDisplayedChatId={setDisplayedChatId} />)}
                {isLoading && (
                    <div
                        style={{
                            background: "#fff",
                            borderRadius: "12px",
                            border: "1px solid #eee",
                            padding: "16px",
                            minHeight: "64px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                            marginTop: "auto",
                            position: "sticky",
                            bottom: "30px",
                            zIndex: 10,
                            gap: "10px"
                        }}
                    >
                        <Loader />
                        Loading...
                    </div>
                )}
            </div>
        </div>
    );
}
