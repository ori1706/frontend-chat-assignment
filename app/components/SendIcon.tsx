export default function SendIcon() {
    return (
        <button
            type="button"
            style={{
                background: "#22c55e",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(34,197,94,0.15)",
                cursor: "pointer",
                padding: 0,
            }}
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.71402 3.04804C3.62409 3.00413 3.523 2.98834 3.42396 3.00273C3.32492 3.01712 3.23251 3.06102 3.15878 3.1287C3.08505 3.19638 3.03343 3.28471 3.01064 3.38216C2.98785 3.47962 2.99495 3.58168 3.03102 3.67504L5.87402 11.302C6.0417 11.7523 6.0417 12.2478 5.87402 12.698L3.03202 20.325C2.99614 20.4183 2.98913 20.5202 3.0119 20.6174C3.03468 20.7147 3.08619 20.8029 3.15974 20.8705C3.2333 20.9381 3.32549 20.9821 3.42434 20.9966C3.52318 21.0112 3.62412 20.9956 3.71402 20.952L21.714 12.452C21.7996 12.4115 21.872 12.3476 21.9227 12.2675C21.9734 12.1875 22.0003 12.0948 22.0003 12C22.0003 11.9053 21.9734 11.8126 21.9227 11.7325C21.872 11.6525 21.7996 11.5885 21.714 11.548L3.71402 3.04804Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6 12H22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>
    );
}