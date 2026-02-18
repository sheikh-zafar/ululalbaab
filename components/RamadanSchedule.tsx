"use client";
import React from "react";
import { CalendarToday, LocationOn, AccessTime } from "@mui/icons-material";
import Link from "next/link";

const RamadanSchedule = () => {

    const schedules = [
        { week: "Sunday", topic: "Ramadan: Shahrun Mubarakun", location: "Online", mapLink: "https://youtube.com/Zafarulhasan", timing: "05:35 PM - 06:15 PM" },
        { week: "Sunday", topic: "Tafseer Surah Yaseen Aur Juz 23", location: "Online", mapLink: "https://youtube.com/Zafarulhasan", timing: "After Taraweeh (08:30 PM - 11:00 PM)" },

        { week: "Monday", topic: "Rawdatus Saa'im", location: "Masjid Al Zarooni Al Kabeer", mapLink: "https://maps.app.goo.gl/Xqq9f1EorFufewGD8", timing: "After Asr (4:15 - 5:15)" },
        { week: "Monday", topic: "Ramadan: Shahrun Mubarakun", location: "Online", mapLink: "https://youtube.com/Zafarulhasan", timing: "05:35 PM - 06:15 PM" },
        { week: "Monday", topic: "Tafseer Surah Yaseen Aur Juz 23", location: "Online", mapLink: "https://youtube.com/Zafarulhasan", timing: "After Taraweeh (08:30 PM - 11:00 PM)" },

        { week: "Tuesday", topic: "Rawdatus Saa'im", location: "Masjid Yusuf Baqar - Hor Al Anz", mapLink: "https://maps.app.goo.gl/kMoLGXqyhPBDpsxJ7", timing: "After Asr (4:15 - 5:15)" },
        { week: "Tuesday", topic: "Ramadan: Shahrun Mubarakun", location: "Online", mapLink: "https://youtube.com/Zafarulhasan", timing: "05:35 PM - 06:15 PM" },
        { week: "Tuesday", topic: "Tafseer Surah Yaseen Aur Juz 23", location: "Online", mapLink: "https://youtube.com/Zafarulhasan", timing: "After Taraweeh (08:30 PM - 11:00 PM)" },

        { week: "Wednesday", topic: "Ramadan: Shahrun Mubarakun", location: "Online", mapLink: "https://youtube.com/Zafarulhasan", timing: "05:35 PM - 06:15 PM" },
        { week: "Wednesday", topic: "Tafseer Surah Yaseen Aur Juz 23", location: "Online", mapLink: "https://youtube.com/Zafarulhasan", timing: "After Taraweeh (08:30 PM - 11:00 PM)" },

        { week: "Thursday", topic: "Ramadan: Shahrun Mubarakun", location: "Online", mapLink: "https://youtube.com/Zafarulhasan", timing: "05:35 PM - 06:15 PM" },
        { week: "Thursday", topic: "Tafseer Surah Yaseen Aur Juz 23", location: "Online", mapLink: "https://youtube.com/Zafarulhasan", timing: "After Taraweeh (08:30 PM - 11:00 PM)" },

        { week: "Friday", topic: "Ramadan: Shahrun Mubarakun", location: "Online", mapLink: "https://youtube.com/Zafarulhasan", timing: "05:35 PM - 06:15 PM" },
        { week: "Friday", topic: "Tafseer Surah Yaseen Aur Juz 23", location: "Online", mapLink: "https://youtube.com/Zafarulhasan", timing: "After Taraweeh (08:30 PM - 11:00 PM)" },

        { week: "Saturday", topic: "Rawdatus Saa'im", location: "Masjid Ash-Shaikha Latifa Bint Hamdan (Ibrahim al Khaleel)", mapLink: "https://maps.app.goo.gl/mscog2WwkqiHVszA8", timing: "After Asr (4:15 - 5:15)" },
        { week: "Saturday", topic: "Ramadan: Shahrun Mubarakun", location: "Online", mapLink: "https://youtube.com/Zafarulhasan", timing: "05:35 PM - 06:15 PM" },
        { week: "Saturday", topic: "Tafseer Surah Yaseen Aur Juz 23", location: "Online", mapLink: "https://youtube.com/Zafarulhasan", timing: "After Taraweeh (08:30 PM - 11:00 PM)" },
    ];

    const dayOrder = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Group schedules by day, preserving order
    const grouped = schedules.reduce<Record<string, typeof schedules>>((acc, item) => {
        if (!acc[item.week]) acc[item.week] = [];
        acc[item.week].push(item);
        return acc;
    }, {});

    const groupedDays = dayOrder.filter((day) => grouped[day]);

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-center text-[#6c6c6c] mb-8">
                📅 Ramadan Lecture Schedule
            </h2>
            <div className="space-y-6">
                {groupedDays.map((day) => (
                    <div key={day} className="rounded-xl border border-[#ebe6d3] shadow-sm overflow-hidden">
                        {/* Day Header */}
                        <div className="bg-[#f9f3e3] px-4 py-2 flex items-center gap-2 border-b border-[#ebe6d3]">
                            <CalendarToday className="text-[#bb8732]" fontSize="small" />
                            <span className="font-bold text-[#bb8732] text-sm uppercase tracking-wide">
                                {day}
                            </span>
                        </div>

                        {/* Lectures for that day */}
                        <div className="divide-y divide-[#f0e9d6]">
                            {grouped[day].map((item, index) => (
                                <div key={index} className="bg-white p-4">
                                    <div className="text-[#6a6a6a] text-base font-medium mb-2">
                                        {item.topic}
                                    </div>
                                    <div className="text-sm flex items-center gap-2 mb-1">
                                        <LocationOn className="text-[#dcbc23]" fontSize="small" />
                                        <Link
                                            href={item.mapLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline text-[#dcbc23] hover:text-[#bb8732] transition-colors"
                                        >
                                            {item.location}
                                        </Link>
                                    </div>
                                    <div className="text-[#6a6a6a] text-sm flex items-center gap-2">
                                        <AccessTime className="text-[#bb8732]" fontSize="small" />
                                        {item.timing}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RamadanSchedule;