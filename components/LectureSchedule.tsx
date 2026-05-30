"use client";
import React from "react";
import { CalendarToday, LocationOn, AccessTime } from "@mui/icons-material";
import Link from "next/link";

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    // ── Sunday ──────────────────────────────
    {
      "@type": "Event",
      "name": "Seerat'un Nabi (ﷺ)",
      "description": "Weekly online lecture on the biography of the Prophet (ﷺ) by Sheikh Zafar ul Hasan Madani.",
      "url": "https://youtube.com/Zafarulhasan",
      "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "inLanguage": "ur",
      "organizer": {
        "@type": "Person",
        "name": "Sheikh Zafar ul Hasan Madani",
        "url": "https://zafarulhasan.com",
      },
      "location": {
        "@type": "VirtualLocation",
        "url": "https://youtube.com/Zafarulhasan",
      },
      "eventSchedule": {
        "@type": "Schedule",
        "byDay": "https://schema.org/Sunday",
        "repeatFrequency": "P1W",
        "scheduleTimezone": "Asia/Dubai",
      },
    },

    // ── Monday ──────────────────────────────
    {
      "@type": "Event",
      "name": "Mukhtasar Sho'bul Emaan lil Bayhaqi / Riyadus Saliheen",
      "description": "Weekly online lecture covering Mukhtasar Sho'bul Emaan and Riyadus Saliheen by Sheikh Zafar ul Hasan Madani.",
      "url": "https://youtube.com/Zafarulhasan",
      "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "inLanguage": "ur",
      "organizer": {
        "@type": "Person",
        "name": "Sheikh Zafar ul Hasan Madani",
        "url": "https://zafarulhasan.com",
      },
      "location": {
        "@type": "VirtualLocation",
        "url": "https://youtube.com/Zafarulhasan",
      },
      "eventSchedule": {
        "@type": "Schedule",
        "byDay": "https://schema.org/Monday",
        "repeatFrequency": "P1W",
        "scheduleTimezone": "Asia/Dubai",
      },
    },

    // ── Tuesday (Maghrib) ───────────────────
    {
      "@type": "Event",
      "name": "Breeze of Iman",
      "description": "In-person lecture at Masjid Khadija bint Khuwailid after Maghrib prayer.",
      "url": "https://zafarulhasan.com/lecture-schedule",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "inLanguage": "ur",
      "organizer": {
        "@type": "Person",
        "name": "Sheikh Zafar ul Hasan Madani",
        "url": "https://zafarulhasan.com",
      },
      "location": {
        "@type": "Place",
        "name": "Masjid Khadija bint Khuwailid",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Al-Nahda-2",
          "addressCountry": "AE",
        },
        "hasMap": "https://maps.app.goo.gl/oYtgodMLQv6McE2r7",
      },
      "eventSchedule": {
        "@type": "Schedule",
        "byDay": "https://schema.org/Tuesday",
        "repeatFrequency": "P1W",
        "scheduleTimezone": "Asia/Dubai",
      },
    },

    // ── Tuesday (Isha) ──────────────────────
    {
      "@type": "Event",
      "name": "Breeze of Iman",
      "description": "In-person lecture at Masjid Yusuf Baqar after Isha prayer.",
      "url": "https://zafarulhasan.com/lecture-schedule",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "inLanguage": "ur",
      "organizer": {
        "@type": "Person",
        "name": "Sheikh Zafar ul Hasan Madani",
        "url": "https://zafarulhasan.com",
      },
      "location": {
        "@type": "Place",
        "name": "Masjid Yusuf Baqar",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Hor Al Anz",
          "addressCountry": "AE",
        },
        "hasMap": "https://maps.app.goo.gl/kMoLGXqyhPBDpsxJ7",
      },
      "eventSchedule": {
        "@type": "Schedule",
        "byDay": "https://schema.org/Tuesday",
        "repeatFrequency": "P1W",
        "scheduleTimezone": "Asia/Dubai",
      },
    },

    // ── Wednesday ───────────────────────────
    {
      "@type": "Event",
      "name": "Quran Tafseer",
      "description": "Weekly in-person Quran Tafseer lecture at Masjid Mohammed bin Hasan Ash Shaikh after Isha prayer.",
      "url": "https://zafarulhasan.com/lecture-schedule",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "inLanguage": "ur",
      "organizer": {
        "@type": "Person",
        "name": "Sheikh Zafar ul Hasan Madani",
        "url": "https://zafarulhasan.com",
      },
      "location": {
        "@type": "Place",
        "name": "Masjid Mohammed bin Hasan Ash Shaikh",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Al Twar 2",
          "addressCountry": "AE",
        },
        "hasMap": "https://maps.app.goo.gl/FrYfnHzK4wLbjb3k8",
      },
      "eventSchedule": {
        "@type": "Schedule",
        "byDay": "https://schema.org/Wednesday",
        "repeatFrequency": "P1W",
        "scheduleTimezone": "Asia/Dubai",
      },
    },

    // ── Thursday ────────────────────────────
    {
      "@type": "Event",
      "name": "Sharh Bulugh al Maram li Ibn Hajar al Asqalani",
      "description": "Weekly in-person explanation of Bulugh al Maram at Masjid Mohammed bin Hasan Ash Shaikh after Isha prayer.",
      "url": "https://zafarulhasan.com/lecture-schedule",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "inLanguage": "ur",
      "organizer": {
        "@type": "Person",
        "name": "Sheikh Zafar ul Hasan Madani",
        "url": "https://zafarulhasan.com",
      },
      "location": {
        "@type": "Place",
        "name": "Masjid Mohammed bin Hasan Ash Shaikh",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Al Twar 2",
          "addressCountry": "AE",
        },
        "hasMap": "https://maps.app.goo.gl/FrYfnHzK4wLbjb3k8",
      },
      "eventSchedule": {
        "@type": "Schedule",
        "byDay": "https://schema.org/Thursday",
        "repeatFrequency": "P1W",
        "scheduleTimezone": "Asia/Dubai",
      },
    },

    // ── Friday ──────────────────────────────
    {
      "@type": "Event",
      "name": "Sharh Al-Targheeb wat-Tarheeb",
      "description": "Weekly in-person explanation of Al-Targheeb wat-Tarheeb at Masjid Mohammed bin Hasan Ash Shaikh after Isha prayer.",
      "url": "https://zafarulhasan.com/lecture-schedule",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "inLanguage": "ur",
      "organizer": {
        "@type": "Person",
        "name": "Sheikh Zafar ul Hasan Madani",
        "url": "https://zafarulhasan.com",
      },
      "location": {
        "@type": "Place",
        "name": "Masjid Mohammed bin Hasan Ash Shaikh",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Al Twar 2",
          "addressCountry": "AE",
        },
        "hasMap": "https://maps.app.goo.gl/FrYfnHzK4wLbjb3k8",
      },
      "eventSchedule": {
        "@type": "Schedule",
        "byDay": "https://schema.org/Friday",
        "repeatFrequency": "P1W",
        "scheduleTimezone": "Asia/Dubai",
      },
    },

    // ── Saturday ────────────────────────────
    {
      "@type": "Event",
      "name": "Beauty of Islam",
      "description": "Weekly in-person lecture at Masjid Ash-Shaikha Latifa Bint Hamdan after Isha prayer.",
      "url": "https://zafarulhasan.com/lecture-schedule",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "inLanguage": "ur",
      "organizer": {
        "@type": "Person",
        "name": "Sheikh Zafar ul Hasan Madani",
        "url": "https://zafarulhasan.com",
      },
      "location": {
        "@type": "Place",
        "name": "Masjid Ash-Shaikha Latifa Bint Hamdan (Ibrahim al Khaleel)",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "AE",
        },
        "hasMap": "https://maps.app.goo.gl/mscog2WwkqiHVszA8",
      },
      "eventSchedule": {
        "@type": "Schedule",
        "byDay": "https://schema.org/Saturday",
        "repeatFrequency": "P1W",
        "scheduleTimezone": "Asia/Dubai",
      },
    },
  ],
};


const LectureSchedule = () => {
  const schedule = [
    { week: "Sunday", topic: "Seerat'un Nabi(ﷺ)", location: "Online", mapLink: "https://youtube.com/Zafarulhasan", timing: "After Isha" },
    { week: "Monday", topic: "Mukhtasar Sho'bul emaan lil Bayhaqi / Riyadus saliheen", location: "Online", mapLink: "https://youtube.com/Zafarulhasan", timing: "After Isha" },
    { week: "Tuesday", topic: "Breeze of Iman", location: "Masjid Khadija bint Khuwailid - Al-Nahda-2", mapLink: "https://maps.app.goo.gl/oYtgodMLQv6McE2r7", timing: "After Magrib" },
    { week: "Tuesday", topic: "Breeze of Iman", location: "Masjid Yusuf Baqar - Hor Al Anz", mapLink: "https://maps.app.goo.gl/kMoLGXqyhPBDpsxJ7", timing: "After Isha" },
    { week: "Wednesday", topic: "Quran Tafseer", location: "Masjid Mohammed bin Hasan Ash Shaikh - Al Twar 2", mapLink: "https://maps.app.goo.gl/FrYfnHzK4wLbjb3k8", timing: "After Isha" },
    { week: "Thursday", topic: "Sharh Bulugh al Maram li Ibn Hajar al Asqalani", location: "Masjid Mohammed bin Hasan Ash Shaikh - Al Twar 2", mapLink: "https://maps.app.goo.gl/FrYfnHzK4wLbjb3k8", timing: "After Isha" },
    { week: "Friday", topic: "Sharh Al-Targheeb wat-Tarheeb", location: "Masjid Mohammed bin Hasan Ash Shaikh - Al Twar 2", mapLink: "https://maps.app.goo.gl/FrYfnHzK4wLbjb3k8", timing: "After Isha" },
    { week: "Saturday", topic: "Beauty of Islam", location: "Masjid Ash-Shaikha Latifa Bint Hamdan (Ibrahim al Khaleel)", mapLink: "https://maps.app.goo.gl/mscog2WwkqiHVszA8", timing: "After Isha" },
  ];

  return (
    <>
      {/* ── Schema.org JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

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
    </>
  );
};

export default LectureSchedule;