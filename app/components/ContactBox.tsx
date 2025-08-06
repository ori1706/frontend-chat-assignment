import { IChatPreview } from "../types";

export default function ContactBox({ chat, setDisplayedChatId }: { chat: IChatPreview, setDisplayedChatId: (chatId: string) => void }) {
    return (
        <button
            className="hover:bg-gray-100"
            style={{ height: "72px", display: "flex", alignItems: "center", padding: "10px", cursor: "pointer" }}
            onClick={() => setDisplayedChatId(chat.id)}
        >
            <img
                src={chat.contactImage}
                alt={chat.contactName}
                style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    display: "inline-block",
                    verticalAlign: "middle",
                    marginRight: "12px"
                }}
            />
            <div className="flex flex-col gap-1  w-full">
                <div className="flex flex-col gap-1 w-full px-2 py-1 rounded transition-colors duration-150">
                    <h1 className="inline-block align-start text-left">{chat.contactName}</h1>
                    <p
                        className="inline-block align-start text-left text-gray-600 text-xs overflow-hidden text-ellipsis whitespace-nowrap max-w-[198px]"
                        title={chat.lastMessage}
                    >
                        {chat.lastMessage}
                    </p>
                </div>
            </div>
        </button>
    );
}