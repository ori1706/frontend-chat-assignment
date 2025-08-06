"use client";

import { IChat, IMessage } from "../types";
import { useEffect, useState } from "react";
import Message from "./Message";
import SendIcon from "./SendIcon";

export default function SingleChat({ chatId }: { chatId: string }) {
    const [messages, setMessages] = useState<IMessage[]>([]);

    useEffect(() => {
        const fetchMessages = async () => {
            const response = await fetch(`/api/chat/${chatId}`);
            const data = await response.json();
            console.log(data);
            setMessages(data.messages);
        };
        fetchMessages();
    }, [chatId]);

    return (
        <div style={{ height: "100vh", overflow: "hidden", width: "100%", display: "flex", flexDirection: "column", padding: "10px", gap: "10px" }}>
            <div style={{ flex: 1, overflowY: "scroll", paddingBottom: "80px" }}>
                {messages.map((message) => (
                    <Message key={message.id} message={message} />
                ))}
            </div>
            <div
                style={{
                    bottom: "30px",
                    left: "calc(312px + 0px)", // 312px for sidebar width, adjust if needed
                    right: "0",
                    display: "flex",
                    justifyContent: "center",
                    pointerEvents: "none", // allow input to be clickable
                    zIndex: 20,
                    // width: "100%",
                }}
            >
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        minWidth: "240px",
                        maxWidth: "100%",
                        pointerEvents: "auto",

                    }}
                >
                    <input
                        type="text"
                        placeholder="Start typing your message..."
                        style={{
                            width: "100%",
                            padding: "12px 48px 12px 24px", // extra right padding for icon
                            borderRadius: "999px",
                            border: "1px solid #ccc",
                            outline: "none",
                            fontSize: "16px",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                            background: "#fff",
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            right: "12px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <SendIcon />
                    </div>
                </div>
            </div>
        </div>
    );
}