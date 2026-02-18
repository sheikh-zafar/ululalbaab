"use client";

import React from "react";
import Image from "next/image";
import { Gulzar } from "next/font/google";

const gulzar = Gulzar({
    weight: "400",
    subsets: ["arabic"],
    display: "swap",
});

const Logo = () => {
    return (
        <div className="max-w-4xl mx-auto p-8 sm:p-3 xs:p-2">
            {/* Card */}
            <div className="relative w-full mx-auto rounded-lg shadow-2xl bg-gradient-to-br from-[#4f4f4f] via-[#3a3a3a] to-[#2a2a2a]">

                {/* ===== Background layer (clipped) ===== */}
                <div className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none">

                    {/* Islamic pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern
                                    id="islamic-pattern"
                                    x="0"
                                    y="0"
                                    width="40"
                                    height="40"
                                    patternUnits="userSpaceOnUse"
                                >
                                    <path
                                        d="M20 0L30 10L20 20L10 10Z
                       M0 20L10 30L20 20L10 10Z
                       M20 20L30 30L20 40L10 30Z
                       M20 20L30 10L40 20L30 30Z"
                                        fill="#facc15"
                                        opacity="0.3"
                                    />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#islamic-pattern)" />
                        </svg>
                    </div>

                    {/* Top border */}
                    <div className="h-1 bg-gradient-to-r from-transparent via-[#facc15] to-transparent" />

                    {/* Bottom border */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#facc15] to-transparent" />
                </div>

                <div className="relative p-8">

                    {/* Logo image */}
                    <div className="flex justify-center mb-6">
                        <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#facc15] to-[#d4a207] p-1 shadow-lg">
                            <div className="w-full h-full rounded-full bg-[#4f4f4f] flex items-center justify-center overflow-hidden">
                                <Image
                                    src="/images/icon-192x192.png"
                                    alt="zafarulhasan madani"
                                    width={70}
                                    height={70}
                                    className="rounded-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="text-center space-y-4">

                        <div
                            className={`${gulzar.className} text-[#facc15] text-lg sm:text-sm font-light tracking-wide`}
                            dir="rtl"
                        >
                            الموقع الرسمي لفضيلة الشيخ
                        </div>

                        {/* Main name */}
                        <div className="relative inline-block">

                            {/* Glow */}
                            <div className="absolute -inset-3 blur-2xl bg-[#facc15] opacity-20" />

                            <h4
                                className={`${gulzar.className}
                  relative
                  text-6xl sm:text-5xl md:text-6xl
                  leading-[2]
                  font-bold
                  text-transparent bg-clip-text
                  bg-gradient-to-r from-[#facc15] via-[#ffd700] to-[#facc15]
                  tracking-tight`}
                                dir="rtl"
                            >
                                ظفر الحسن
                            </h4>
                        </div>

                        {/* Bottom text */}
                        <div
                            className={`${gulzar.className} text-[#facc15] text-lg sm:text-sm font-light tracking-wide`}
                            dir="rtl"
                        >
                            مدني حفظه اللّه
                        </div>
                    </div>

                    {/* Corner decorations */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#facc15] opacity-30" />
                    <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[#facc15] opacity-30" />
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[#facc15] opacity-30" />
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#facc15] opacity-30" />
                </div>
            </div>
        </div>
    );
};

export default Logo;