"use client";
import { Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const socialLinks = [
    {
        name: "Facebook",
        href: "https://www.facebook.com/zafarulhasan.official/",

        img: "/images/social/facebook.png"
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/zafarulhasan.official/",

        img: "/images/social/instagram.png"
    },
    {
        name: "WhatsApp",
        href: "https://whatsapp.com/channel/0029Vb8QxVX8F2pF5Nrbjj1Y",

        img: "/images/social/whatsapp.png"
    },
    {
        name: "YouTube",
        href: "https://www.youtube.com/zafarulhasan",

        img: "/images/social/youtube.png"
    },
    {
        name: "Telegram",
        href: "https://t.me/zafarulhasan",

        img: "/images/social/telegram.webp"
    },
    {
        name: "Mixlr",
        href: "https://mixlr.com/zafarulhasan",

        img: "/images/social/mixlr.png"
    },
    {
        name: "Calendar",
        href: "https://accounts.google.com/ServiceLogin?service=cl&passive=1209600&osid=1&continue=https://calendar.google.com/calendar/u/0/r/month?tab%3Dwc%26pli%3D1&followup=https://calendar.google.com/calendar/u/0/r/month?tab%3Dwc%26pli%3D1&scc=1",

        img: "/images/social/googlecalendar.png"
    },
];

const SocialLinks = () => {
    return (
        <Container className="xxl:mt-20 xl:mt-20 lg:mt-20 sm:mt-12 md:mt-12 s:mt-8 xs:mt-8 xxs:mt-8" sx={{ textAlign: "center" }}>
            <div className="flex flex-nowrap justify-center gap-6 my-10 ">
                {socialLinks.map(({ name, href, img }, idx) => (
                    <Link
                        key={idx}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center text-lg xs:text-sm s:text-sm hover:opacity-80 transition"
                        aria-label={name}
                    >
                        <Image width={45} height={45} src={img} alt="zafarulhasan links" />
                    </Link>
                ))}
            </div>
        </Container>

    );
};

export default SocialLinks;
