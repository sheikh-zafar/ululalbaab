"use client"
import Image from "next/image";
import Logo from "../public/transparenticon.png"
import { Geist, Aref_Ruqaa, Noto_Naskh_Arabic, Changa } from "next/font/google"
import localFont from "next/font/local"
import Insta from "../public/instagram.png"
import Mixlr from "../public/mixlr.png"
import Bell from "../public/bell.png"
import Youtube from "../public/youtubepngwing.png"
import Arrow from "../public/icons/arrow.svg"

import { ArrowRightIcon, CalendarDaysIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from "react";
import Link from "next/link";

const samarkan = localFont({
    src: '../public/font/samarkan.ttf', // Adjust the path based on your file location
    variable: '--font-samarkan',         // Defines a CSS variable name
})
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
})
const arefRuqaa = Aref_Ruqaa({
    subsets: ["arabic"], // or ["latin", "arabic"] if you want both
    weight: ["400", "700"], // available weights
    variable: "--font-aref-ruqaa",
    display: "swap",
});
const notoNaskh = Noto_Naskh_Arabic({ subsets: ['latin'], weight: ['700'] });
const changa = Changa({ subsets: ['latin'], weight: ['700'] });

const schedule = [
    { week: "Sunday", weekUrdu: "اتوار", topic: "Seerat'un Nabi ﷺ", topicUrdu: "سیرت النبی ﷺ", href: "https://youtube.com/Zafarulhasan" },
    {
        week: "Monday",
        weekUrdu: "پیر",
        topic: ["Riyadus Saliheen", "Mukhtasar Sho'bul Emaan"],
        topicUrdu: ["ریاض الصالحین", "مختصر شعب الایمان للبیہقی"],
        href: "https://youtube.com/Zafarulhasan",
    },
    { week: "Tuesday", weekUrdu: "منگل", topic: "Breeze of Iman", topicUrdu: "نسیمِ ایمان", href: "https://youtube.com/Zafarulhasan" },
    { week: "Wednesday", weekUrdu: "بدھ", topic: "Quran Tafseer", topicUrdu: "تفسیرِ قرآن", href: "https://youtube.com/Zafarulhasan" },
    { week: "Thursday", weekUrdu: "جمعرات", topic: "Bulugh al Maram", topicUrdu: "شرح بلوغ المرام لابن حجر العسقلانی", href: "https://youtube.com/Zafarulhasan" },
    { week: "Friday", weekUrdu: "جمعہ", topic: "Al-Targheeb wat-Tarheeb", topicUrdu: "شرح الترغیب والترہیب", href: "https://youtube.com/Zafarulhasan" },
    { week: "Saturday", weekUrdu: "ہفتہ", topic: "Beauty of Islam", topicUrdu: "محاسن اسلام", href: "https://youtube.com/Zafarulhasan" },
];
function isoWeekNumber(date: Date) {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
}

export default function HeroHeader() {
    const today = new Date();
    const dayName = today.toLocaleDateString("en-US", { weekday: "long" });
    const entry = schedule.find((d) => d.week === dayName);

    const isAlternating = Array.isArray(entry?.topic);
    const idx = isoWeekNumber(today) % 2 === 0 ? 0 : 1; // flip if your rotation starts on the other week

    const topicEn = isAlternating ? (entry!.topic as string[])[idx] : (entry?.topic as string) ?? "";
    const topicUr = isAlternating ? (entry!.topicUrdu as string[])[idx] : (entry?.topicUrdu as string) ?? "";
    const topicHref = isAlternating ? (entry!.href as string)[idx] : (entry?.href as string) ?? "";

    const [showUrdu, setShowUrdu] = useState(false);
    useEffect(() => {
        const id = setInterval(() => setShowUrdu((s) => !s), 2500);
        return () => clearInterval(id);
    }, []);

    if (!entry) return null;
    const dayLabel = showUrdu ? entry.weekUrdu : entry.week;
    return (
        <div>
            {/**Mobile */}
            <header className="lg:hidden h-screen xxl:hidden xl:hidden md:flex md:flex-col sm:flex sm:flex-col  xxs:flex xxs:flex-col xs:flex xs:flex-col s:flex s:flex-col pt-5 mt-5 bg-[#F9FAFB] items-center px-4 justify-center">
                <Link
                    href={topicHref}
                    className="rounded-2xl text-gray-500 text-base border-2 border-gray-500 px-6 py-1 flex flex-nowrap items-center justify-center whitespace-nowrap"
                >
                    <span key={`label-${showUrdu}`} dir={showUrdu ? "rtl" : "ltr"} className={`animate-pulse bounce-swap ${arefRuqaa.className}`}>
                        ●&nbsp;{dayLabel}
                    </span>
                    &nbsp; &nbsp;
                    <span
                        key={`topic-${showUrdu}`}
                        dir={showUrdu ? "rtl" : "ltr"}
                        className={`text-mughal font-bold bounce-swap ${arefRuqaa.className}`}
                    >
                        {showUrdu ? topicUr : topicEn}
                    </span>
                    <Image
                        src={Arrow}
                        alt="Zafar-ul-Hasan Madani logo"
                        width={30}
                        height={30}
                        priority
                        className="h-6 w-6 mx-2 object-contain"
                    />
                </Link>
                <Image
                    src={Logo}
                    alt="Zafar-ul-Hasan Madani logo"
                    width={140}
                    height={140}
                    priority
                    className="h-56 w-56 mx-auto min-[640px]:h-36 min-[640px]:w-36 object-contain"
                />

                <div
                    className="text-3xl grid grid-cols-1 min-[640px]:text-5xl min-[1024px]:text-6xl leading-relaxed hover:opacity-90 transition-opacity"
                    dir="rtl"
                >
                    <span className={`text-zafarlogo text-[20px]   mx-auto  ${changa.className}`}> فضيلة الشيخ</span>
                    <span className={`text-zafarlogo text-shadow-sm text-shadow-gray-500 mx-auto text-7xl xs:text-6xl ${notoNaskh.className}`}>ظفر الحسن </span>
                    <span className={`text-zafarlogo text-[20px] mx-auto  ${changa.className}`}>مدني حفظه الله</span>
                </div>
                <div
                    className="text-3xl grid grid-cols-1 min-[640px]:text-5xl min-[1024px]:text-6xl leading-relaxed hover:opacity-90 transition-opacity"
                >
                    <span className={`text-[35px] mx-auto mt-5 text-shadow-xs xs:text-3xl text-shadow-goldengrass text-gray-500 ${samarkan.className}`}>ZAFARUL HASAN MADANI</span>
                    <hr />
                </div>
                {/* Buttons */}
                <div className={`${geistSans.className} z-10 my-8 min-[640px]:mt-10 flex flex-col min-[640px]:flex-row items-center gap-4 w-full min-[640px]:w-auto px-6 min-[640px]:px-0`}>
                    <a
                        href="/"
                        type="button"
                        className={`w-full bg-zafarlogo min-[640px]:w-auto text-lg min-[640px]:text-base px-6 rounded-md bg-button-primary text-gray-800 hover:bg-button-hover transition-colors flex items-center justify-center gap-2 ${notoNaskh.className}`}
                    >
                        Explore duroos <Image
                            src={Arrow}
                            alt="Zafar-ul-Hasan Madani logo"
                            width={30}
                            height={30}
                            priority
                            className="h-6 w-6 object-contain"
                        />
                    </a>
                    <a
                        href="/"
                        type="button"
                        className={`w-full border-zafarlogo border-2 min-[640px]:w-auto text-lg min-[640px]:text-base px-6 rounded-md bg-button-primary text-gray-800 hover:bg-button-hover transition-colors flex items-center justify-center gap-2 ${notoNaskh.className}`}
                    ><CalendarDaysIcon className="h-5 w-5" />
                        Dars Schedule
                    </a>
                </div>
                <div className="flex flex-row items-center gap-5 pb-12 rounded-2xl">
                    <Image
                        src={Youtube}
                        alt="Zafar-ul-Hasan Madani logo"
                        className="rounded-2xl"
                        width={50}
                        height={50}
                    />
                    <Image
                        src={Mixlr}
                        alt="Zafar-ul-Hasan Madani logo"
                        width={57}
                        height={57}
                    />
                    <Image
                        src={Insta}
                        alt="Zafar-ul-Hasan Madani logo"
                        width={50}
                        height={50}
                    />
                    <Image
                        src={Bell}
                        alt="Zafar-ul-Hasan Madani logo"
                        className="animate-[pulse_0.9s_cubic-bezier(0.4,0,0.9,1)_infinite]"
                        width={50}
                        height={50}
                    />

                </div>
            </header>
            {/**Desktop */}
            <header className="xs:hidden xxs:hidden sm:hidden s:hidden lg:flex xl:flex xxl:flex pt-10 mt-10 bg-[#F9FAFB] flex flex-col items-center px-4 justify-center ">
                <Link
                    href={topicHref}
                    className="rounded-2xl text-gray-500 text-lg border-2 border-gray-500 px-6 py-1 flex flex-nowrap items-center justify-center whitespace-nowrap"
                >
                    <span key={`label-${showUrdu}`} dir={showUrdu ? "rtl" : "ltr"} className={`animate-pulse bounce-swap ${arefRuqaa.className}`}>
                        ●&nbsp;{dayLabel}
                    </span>
                    &nbsp; &nbsp;
                    <span
                        key={`topic-${showUrdu}`}
                        dir={showUrdu ? "rtl" : "ltr"}
                        className={`text-mughal font-bold bounce-swap ${arefRuqaa.className}`}
                    >
                        {showUrdu ? topicUr : topicEn}
                    </span>
                    <Image
                        src={Arrow}
                        alt="Zafar-ul-Hasan Madani logo"
                        width={30}
                        height={30}
                        priority
                        className="h-6 w-6 mx-2 object-contain"
                    />
                </Link>
                <div className="my-10 mx-10 xxl:grid xxl:grid-cols-2 xl:grid xl:grid-cols-2 md:grid md:grid-cols-2 lg:grid grid-cols-2 gap-3 sm:hidden xs:hidden s:hidden xxs:hidden">
                    <div>
                        <div
                            className="text-3xl content-center mt-10 grid grid-cols-1 min-[640px]:text-5xl min-[1024px]:text-6xl leading-relaxed hover:opacity-90 transition-opacity"
                            dir="rtl"
                        >
                            <span className={`text-zafarlogo text-[20px]  mx-auto  ${changa.className}`}> فضيلة الشيخ</span>
                            <span className={`text-zafarlogo text-shadow-sm text-shadow-gray-500 mx-auto text-7xl md:text-5xl s:text-2xl xs:text-5xl ${notoNaskh.className}`}>ظفر الحسن </span>
                            <span className={`text-zafarlogo text-[20px] mx-auto  ${changa.className}`}>مدني حفظه الله</span>
                            <div
                                className="text-3xl grid grid-cols-1 min-[640px]:text-5xl min-[1024px]:text-6xl leading-relaxed hover:opacity-90 transition-opacity"
                            >
                                <span className={`text-6xl md:text-4xl mt-10 mx-auto text-shadow-sm text-shadow-goldengrass text-gray-500 ${samarkan.className}`}>ZAFARUL HASAN MADANI</span>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div className="w-full ml-40 md:ml-20 xs:ml-20 xxs:mx-auto s:mx-auto">
                        <Image
                            src={Logo}
                            alt="Zafar-ul-Hasan Madani logo"
                            width={140}
                            height={140}
                            priority
                            className="h-72 w-72 md:w-60 md:h-60 object-contain"
                        />
                    </div>
                </div>

                {/* Buttons */}
                <div className={`${geistSans.className} z-10 my-8 min-[640px]:mt-10 flex flex-col min-[640px]:flex-row items-center gap-4 w-full min-[640px]:w-auto px-6 min-[640px]:px-0`}>
                    <a
                        href="/"
                        type="button"
                        className={`w-full bg-zafarlogo min-[640px]:w-auto text-lg min-[640px]:text-base px-6 py-[10px] rounded-md bg-button-primary text-gray-800 hover:bg-button-hover transition-colors flex items-center justify-center gap-2 ${notoNaskh.className}`}
                    >
                        Explore duroos <ArrowRightIcon className="h-5 w-5 bg-gray-900 rounded-full text-lg text-white" />
                    </a>
                    <a
                        href="/"
                        type="button"
                        className={`w-full border-zafarlogo py-2 border-2 min-[640px]:w-auto text-lg min-[640px]:text-base px-6 rounded-md bg-button-primary text-gray-800 hover:bg-button-hover transition-colors flex items-center justify-center gap-2 ${notoNaskh.className}`}
                    ><CalendarDaysIcon className="h-6 w-6 pb-1" />
                        Dars Schedule
                    </a>
                </div>
                <div className="flex flex-row items-center gap-5 pb-12 rounded-2xl">
                    <a href="https://www.youtube.com/zafarulhasan" target="_blank">
                        <Image
                            src={Youtube}
                            alt="Zafar-ul-Hasan Madani logo"
                            className="rounded-2xl"
                            width={50}
                            height={50}
                        /></a>

                    <a href="https://mixlr.com/zafarulhasan" target="_blank">
                        <Image
                            src={Mixlr}
                            alt="Zafar-ul-Hasan Madani logo"
                            width={57}
                            height={57}
                        /></a>


                    <a href="https://www.instagram.com/zafarulhasan.official/" target="_blank">
                        <Image
                            src={Insta}
                            alt="Zafar-ul-Hasan Madani logo"
                            width={50}
                            height={50}
                        /></a>


                    <a href="https://www.zafarulhasan.com/links" target="_blank">
                        <Image
                            src={Bell}
                            alt="Zafar-ul-Hasan Madani logo"
                            className="animate-[pulse_0.9s_cubic-bezier(0.4,0,0.9,1)_infinite]"
                            width={50}
                            height={50}
                        /></a>


                </div>
            </header>
        </div>
    );
}