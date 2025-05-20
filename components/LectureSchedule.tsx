"use client";
import React from "react";
import { CalendarToday, LocationOn, AccessTime } from "@mui/icons-material";
import Link from "next/link";

const LectureSchedule = () => {
  const schedule = [
    { week: "Sunday", topic: "Seerat'un Nabi(ﷺ)", location: "Online", mapLink: "https://youtube.com/Zafarulhasan", timing: "After Isha" },
    { week: "Monday", topic: "Explanation of Mukhtasar SHO'BUL EMAAN lil Bayhaqi / Riyadus saliheen", location: "Online", mapLink: "https://youtube.com/Zafarulhasan", timing: "After Isha" },
    { week: "Tuesday", topic: "Breeze of Iman", location: "Masjid Khadija bint Khuwailid - Al-Nahda-2", mapLink: "https://maps.app.goo.gl/oYtgodMLQv6McE2r7", timing: "After Magrib" },
    { week: "Tuesday", topic: "Breeze of Iman", location: "Masjid Yusuf Baqar - Hor Al Anz", mapLink: "https://maps.app.goo.gl/kMoLGXqyhPBDpsxJ7", timing: "After Isha" },
    { week: "Wednesday", topic: "Quran Tafseer", location: "Masjid Mohammed bin Hasan Ash Shaikh - Al Twar 2", mapLink: "https://maps.app.goo.gl/FrYfnHzK4wLbjb3k8", timing: "After Isha" },
    { week: "Thursday", topic: "Sharh Bulugh al Maram li Ibn Hajar al Asqalani", location: "Masjid Mohammed bin Hasan Ash Shaikh - Al Twar 2", mapLink: "https://maps.app.goo.gl/FrYfnHzK4wLbjb3k8", timing: "After Isha" },
    { week: "Friday", topic: "Sharh Al-Targheeb wat-Tarheeb", location: "Masjid Mohammed bin Hasan Ash Shaikh - Al Twar 2", mapLink: "https://maps.app.goo.gl/FrYfnHzK4wLbjb3k8", timing: "After Isha" },
    { week: "Saturday", topic: "Beauty of Islam", location: "Masjid Ash-Shaikha Latifa Bint Hamdan (Ibrahim al Khaleel)", mapLink: "https://maps.app.goo.gl/mscog2WwkqiHVszA8", timing: "After Isha" },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-[#6c6c6c] mb-8">
        📅 Weekly Lecture Schedule
      </h2>
      <div className="space-y-4">
        {schedule.map((item, index) => (
          <div key={index} className="rounded-lg border border-[#ebe6d3] shadow bg-white p-4">
            <div className="text-[#6a6a6a] text-sm flex items-center gap-2 mb-1">
              <CalendarToday className="text-[#bb8732]" fontSize="small" />
              <span className="font-semibold">{item.week || "Unspecified Day"}</span>
            </div>
            <div className="text-[#6a6a6a] text-lg font-medium mb-2">
              {item.topic}
            </div>
            <div className="text-[#6a6a6a] text-sm flex items-center gap-2 mb-1">
              <LocationOn className="text-[#dcbc23]" fontSize="small" />
              <Link
                href={item.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#dcbc23] hover:text-[#bb8732]"
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
  );
};

export default LectureSchedule;
