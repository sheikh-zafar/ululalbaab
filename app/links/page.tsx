import Image from "next/image";

const linkBase =
    "block w-full py-3 px-6 rounded-xl text-center font-medium text-sm tracking-wide transition-transform duration-150 hover:scale-105 active:scale-95 shadow-sm";

interface LinkItem {
    label: string;
    href: string;
    className: string;
    style?: React.CSSProperties;
}

const links: LinkItem[] = [
    {
        label: "Website",
        href: "https://zafarulhasan.com",
        className: "bg-white text-gray-800 border border-gray-200 hover:bg-gray-50",
    },
    {
        label: "Calendar",
        href: "https://calendar.google.com",
        className: "bg-white text-gray-800 border border-gray-200 hover:bg-gray-50",
    },
    {
        label: "WhatsApp",
        href: "https://chat.whatsapp.com/Blmyg0w36Dp0fE92w0NLtD",
        className: "bg-[#25D366] text-white",
    },
    {
        label: "Telegram",
        href: "https://t.me/zafarulhasan",
        className: "bg-[#229ED9] text-white",
    },
    {
        label: "YouTube",
        href: "https://www.youtube.com/zafarulhasan",
        className: "bg-red-600 text-white",
    },
    {
        label: "Facebook",
        href: "https://www.facebook.com/zafarulhasan.official/",
        className: "bg-[#4267B2] text-white",
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/zafarulhasan.official/",
        className: "text-white",
        style: {
            backgroundImage:
                "linear-gradient(to right,#F58529,#FFB900,#DD2A7B,#8134AF,#515BD4)",
        },
    },
    {
        label: "Mixlr",
        href: "https://mixlr.com/zafarulhasan",
        className: "text-white",
        style: {
            backgroundImage:
                "radial-gradient(circle at center,#ED1C24,#A52D2E,#F8A3A6,#CA666E)",
        },
    },
];

export default function Linktree() {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-1 flex items-start justify-center pt-20 sm:pt-10 px-4">
                <div className="w-full max-w-sm pt-10">
                    {/* Avatar */}
                    <div className="flex justify-center mb-6">
                        <Image
                            src={"/images/icon-512x512.png"}
                            alt="Zafarulhasan Madani"
                            width={150}
                            height={150}
                            className="rounded-full border-2 border-gray-200"
                        />
                    </div>

                    {/* Links */}
                    <div className="flex flex-col gap-3">
                        {links.map(({ label, href, className, style }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`zafarulhasan madani - ${label}`}
                            >
                                <div className={`${linkBase} ${className}`} style={style}>
                                    {label}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </main>

        </div>
    );
}
