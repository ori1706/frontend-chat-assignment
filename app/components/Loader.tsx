interface LoaderProps {
    position?: "absolute" | "static" | "relative";
    right?: string;
    top?: string;
    transform?: string;
}

export default function Loader({
    position = "static",
    right,
    top,
    transform
}: LoaderProps = {}) {
    // Add spinning animation styles
    const spinKeyframes = `
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    `;

    // Inject styles
    if (typeof document !== 'undefined' && !document.getElementById('spin-animation')) {
        const style = document.createElement('style');
        style.id = 'spin-animation';
        style.textContent = spinKeyframes;
        document.head.appendChild(style);
    }

    return (
        <div style={{
            position,
            ...(right && { right }),
            ...(top && { top }),
            ...(transform && { transform }),
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_3_1012)">
                    <path d="M10 1.66663V4.99996" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13.5 6.50004L15.9167 4.08337" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15 10H18.3333" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13.5 13.5L15.9167 15.9167" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10 15V18.3333" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M4.08334 15.9167L6.50001 13.5" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M1.66666 10H4.99999" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M4.08334 4.08337L6.50001 6.50004" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_3_1012">
                        <rect width="20" height="20" fill="white" />
                    </clipPath>
                </defs>
            </svg>

        </div>
    );
}