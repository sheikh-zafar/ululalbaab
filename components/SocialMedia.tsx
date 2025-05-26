"use client";
import { Container } from "@mui/material";
import Link from "next/link";
import React from "react";

const socialLinks = [
    {
        name: "Facebook",
        href: "https://www.facebook.com/zafarulhasan.official/",
        svg: (
            <svg fill="#dcbc23" width="32" height="32" viewBox="0 0 24 24">
                <path d="M22 12A10 10 0 1 0 12 22V14.5H9.5V12h2.5V9.8c0-2.5 1.4-3.8 3.6-3.8 1 0 2 .1 2 .1v2.3H16c-1.2 0-1.5.7-1.5 1.4V12h2.7l-.4 2.5H14.5V22A10 10 0 0 0 22 12z" />
            </svg>
        ),
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/zafarulhasan.official/",
        svg: (
            <svg fill="#dcbc23" width="32" height="32" viewBox="0 0 24 24">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.5.5a5 5 0 0 1 1.8 1.1 5 5 0 0 1 1.1 1.8c.2.5.4 1.3.5 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.5a5 5 0 0 1-1.1 1.8 5 5 0 0 1-1.8 1.1c-.5.2-1.3.4-2.5.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.5-.5a5 5 0 0 1-1.8-1.1 5 5 0 0 1-1.1-1.8c-.2-.5-.4-1.3-.5-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2 .5-2.5a5 5 0 0 1 1.1-1.8A5 5 0 0 1 5.7 2.8c.5-.2 1.3-.4 2.5-.5C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.8.1-1 .1-1.6.2-2 .4a3.2 3.2 0 0 0-1.2.7 3.2 3.2 0 0 0-.7 1.2c-.2.4-.3 1-.4 2-.1 1.3-.1 1.7-.1 4.8s0 3.5.1 4.8c.1 1 .2 1.6.4 2 .2.5.5.9.9 1.2.3.3.7.7 1.2.9.4.2 1 .3 2 .4 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1-.1 1.6-.2 2-.4a3.2 3.2 0 0 0 1.2-.9 3.2 3.2 0 0 0 .9-1.2c.2-.4.3-1 .4-2 .1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c-.1-1-.2-1.6-.4-2a3.2 3.2 0 0 0-.9-1.2 3.2 3.2 0 0 0-1.2-.9c-.4-.2-1-.3-2-.4-1.3-.1-1.7-.1-4.8-.1zm0 3.6a5.2 5.2 0 1 1 0 10.4 5.2 5.2 0 0 1 0-10.4zm0 1.8a3.4 3.4 0 1 0 0 6.8 3.4 3.4 0 0 0 0-6.8zm5.4-2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" />
            </svg>
        ),
    },
    {
        name: "WhatsApp",
        href: "https://chat.whatsapp.com/Blmyg0w36Dp0fE92w0NLtD",
        svg: (
            <svg fill="#dcbc23" width="32" height="32" viewBox="0 0 32 32">
                <path d="M16 2.9a13.1 13.1 0 0 0-11.2 20L2.1 29.9l7.3-2.6a13.1 13.1 0 1 0 6.6-24.4zm0 24a11 11 0 0 1-5.6-1.5l-.4-.2-4.3 1.5 1.5-4.1-.3-.4A11 11 0 1 1 16 26.9zm6.2-8.2c-.3-.2-1.6-.8-1.8-.9-.3-.1-.6-.2-.9.2s-1 1.1-1.2 1.3c-.2.2-.4.2-.7.1a8.9 8.9 0 0 1-2.6-1.6 9.9 9.9 0 0 1-1.8-2.3c-.2-.4 0-.6.2-.8l.6-.6c.2-.2.3-.4.5-.7.1-.2.1-.4 0-.6l-.8-2.1a.6.6 0 0 0-.9-.3l-.6.3c-.3.2-.7.5-.9.8-1.1 1.2-.9 3.2.6 5.3a13.7 13.7 0 0 0 5.2 4.5c.7.3 1.3.5 1.8.6h.7c.2 0 .4 0 .6-.2l1.4-1.3c.2-.2.3-.4.2-.6s-.2-.6-.5-.7z" />
            </svg>
        ),
    },
    {
        name: "YouTube",
        href: "https://www.youtube.com/zafarulhasan",
        svg: (
            <svg fill="#dcbc23" width="32" height="32" viewBox="0 0 24 24">
                <path d="M23.5 6.2c-.3-1.2-1.2-2.1-2.4-2.4C19.2 3.3 12 3.3 12 3.3s-7.2 0-9.1.5c-1.2.3-2.1 1.2-2.4 2.4C.9 8.1.9 12 .9 12s0 3.9.5 5.8c.3 1.2 1.2 2.1 2.4 2.4 1.9.5 9.1.5 9.1.5s7.2 0 9.1-.5c1.2-.3 2.1-1.2 2.4-2.4.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.8 15.5V8.5l6.4 3.5-6.4 3.5z" />
            </svg>
        ),
    },
    {
        name: "Telegram",
        href: "https://t.me/zafarulhasan",
        svg: (
            <svg fill="#dcbc23" width="32" height="32" viewBox="0 0 24 24">
                <path d="M9.4 17.7l.3-4.5 8.1-7.3-10.4 5.5-5.2-1.6 19.7-8.2zM20.6.3L.3 9.3c-1.2.5-1.2 1.8-.2 2.1l5.1 1.6 2 6.5c.2.5.3.7.8.7h.1c.4 0 .6-.2.8-.4l2.8-2.9 5.9 4.4c1.1.6 1.9.3 2.1-1.1l3.4-17c.3-1.2-.5-1.7-1.5-1.3z" />
            </svg>
        ),
    },
    {
        name: "Mixlr",
        href: "https://mixlr.com/zafarulhasan",
        svg: (
            <svg fill="#dcbc23" width="32" height="32" viewBox="0 0 24 24">
                <path d="M12.6 1.4c-.6-.2-1.2-.3-1.8-.3-6.1 0-11 4.9-11 11 0 6.1 4.9 11 11 11s11-4.9 11-11c0-4.9-3.2-9.1-7.7-10.4zM12 20.2c-4.5 0-8.2-3.7-8.2-8.2S7.5 3.8 12 3.8s8.2 3.7 8.2 8.2-3.7 8.2-8.2 8.2z" />
            </svg>
        ),
    },
    {
        name: "Calendar",
        href: "https://accounts.google.com/ServiceLogin?service=cl&passive=1209600&osid=1&continue=https://calendar.google.com/calendar/u/0/r/month?tab%3Dwc%26pli%3D1&followup=https://calendar.google.com/calendar/u/0/r/month?tab%3Dwc%26pli%3D1&scc=1",
        svg: (
            <svg fill="#dcbc23" width="32" height="32" viewBox="0 0 24 24">
                <path d="M7 10h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zM7 14h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zM6 2v2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V2h-2v2H8V2H6zm14 18H4V8h16z" />
            </svg>
        ),
    },
];

const SocialLinks = () => {
    return (
        <Container className="xxl:mt-20 xl:mt-20 lg:mt-20 sm:mt-12 md:mt-12 s:mt-8 xs:mt-8 xxs:mt-8" sx={{ textAlign: "center" }}>
            <h2 className="text-dustygray text-center text-5xl lg:text-4xl sm:text-2xl xs:text-xl font-extrabold font-sans ">
                Social Media Links
            </h2>
            <hr className="bg-bgcolor text-2xl" />
            <div className="flex flex-wrap justify-center gap-6 mt-10">

                {socialLinks.map(({ name, href, svg }, idx) => (
                    <Link
                        key={idx}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center text-lg hover:opacity-80 transition"
                        aria-label={name}
                    >
                        {svg}
                        <span className="text-sunflower mt-1">{name}</span>
                    </Link>
                ))}
            </div>
        </Container>

    );
};

export default SocialLinks;
