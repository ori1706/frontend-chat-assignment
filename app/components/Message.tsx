import { IMessage } from "../types";

export default function Message({ message }: { message: IMessage }) {
    const isUser = message.sender === "user";

    return (
        <div
            style={{
                display: "flex",
                justifyContent: isUser ? "flex-end" : "flex-start",
                margin: "8px 0",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    padding: "8px",
                    gap: "10px",
                    width: "320px",
                    maxWidth: "320px",
                    height: "98px",
                    background: isUser ? "#4ade80" : "#FFFFFF",
                    boxShadow: "0px 1px 2px -1px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.1)",
                    borderRadius: "6px",
                    flex: "none",
                    order: 0,
                    alignSelf: "stretch",
                    flexGrow: 1,
                    color: isUser ? "#FFFFFF" : "#000000",
                    wordBreak: "break-word",
                    position: "relative"
                }}
            >
                {message.content}
                <span
                    style={{
                        display: "block",
                        fontSize: "12px",
                        color: "#888",
                        position: "absolute",
                        right: "8px",
                        bottom: "8px",
                        padding: "0 4px",
                        borderRadius: "4px",
                        pointerEvents: "none",
                        zIndex: 1,
                    }}
                >
                    {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
            </div>
        </div>
    );
}