import React from 'react'
import RamadanSchedule from '@/components/RamadanSchedule'

export function generateMetadata() {

    const canonicalUrl = `https://www.zafarulhasan.com/ramadan-schedule-1447-2026`;


    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Ramadan Schedule 1447 – Sheikh Zafar ul Hasan Madani",
        "description": "Weekly Ramadan 1447 (2026) lecture and dars schedule for Sheikh Zafar ul Hasan Madani in Dubai, UAE.",
        "url": "https://www.zafarulhasan.com/ramadan-schedule-1447-2026",
        "numberOfItems": 3,
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "item": {
                    "@type": "Event",
                    "name": "Rawdatus Saa'im – In-Person Dars",
                    "description": "Weekly in-person Ramadan dars on Rawdatus Saa'im by Sheikh Zafar ul Hasan Madani, held After Asr (4:15–5:15 PM) at rotating Dubai masajid.",
                    "eventSchedule": {
                        "@type": "Schedule",
                        "repeatFrequency": "P1W",
                        "byDay": ["https://schema.org/Saturday", "https://schema.org/Sunday", "https://schema.org/Monday", "https://schema.org/Tuesday"],
                        "startTime": "16:15",
                        "endTime": "17:15",
                        "startDate": "2026-03-01",
                        "endDate": "2026-03-29"
                    },
                    "eventStatus": "https://schema.org/EventScheduled",
                    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
                    "location": [
                        {
                            "@type": "Place",
                            "name": "Masjid Ash-Shaikha Latifa Bint Hamdan (Ibrahim al Khaleel)",
                            "url": "https://maps.app.goo.gl/mscog2WwkqiHVszA8",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Dubai",
                                "addressCountry": "AE"
                            }
                        },
                        {
                            "@type": "Place",
                            "name": "Masjid Khadija bint Khuwailid – Al-Nahda-2",
                            "url": "https://maps.app.goo.gl/oYtgodMLQv6McE2r7",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Dubai",
                                "addressCountry": "AE"
                            }
                        },
                        {
                            "@type": "Place",
                            "name": "Masjid Al Zarooni Al Kabeer",
                            "url": "https://maps.app.goo.gl/Xqq9f1EorFufewGD8",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Dubai",
                                "addressCountry": "AE"
                            }
                        },
                        {
                            "@type": "Place",
                            "name": "Masjid Yusuf Baqar – Hor Al Anz",
                            "url": "https://maps.app.goo.gl/kMoLGXqyhPBDpsxJ7",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Dubai",
                                "addressCountry": "AE"
                            }
                        }
                    ],
                    "organizer": {
                        "@type": "Person",
                        "name": "Sheikh Zafar ul Hasan Madani",
                        "url": "https://www.zafarulhasan.com"
                    }
                }
            },
            {
                "@type": "ListItem",
                "position": 2,
                "item": {
                    "@type": "Event",
                    "name": "Ramadan: Shahrun Mubarakun – Online Lecture",
                    "description": "Daily online Ramadan lecture 'Ramadan: Shahrun Mubarakun' by Sheikh Zafar ul Hasan Madani, streamed live on YouTube.",
                    "eventSchedule": {
                        "@type": "Schedule",
                        "repeatFrequency": "P1D",
                        "byDay": [
                            "https://schema.org/Saturday",
                            "https://schema.org/Sunday",
                            "https://schema.org/Monday",
                            "https://schema.org/Tuesday",
                            "https://schema.org/Wednesday",
                            "https://schema.org/Thursday",
                            "https://schema.org/Friday"
                        ],
                        "startTime": "17:35",
                        "endTime": "18:15",
                        "startDate": "2026-03-01",
                        "endDate": "2026-03-30"
                    },
                    "eventStatus": "https://schema.org/EventScheduled",
                    "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
                    "location": {
                        "@type": "VirtualLocation",
                        "url": "https://youtube.com/Zafarulhasan"
                    },
                    "organizer": {
                        "@type": "Person",
                        "name": "Sheikh Zafar ul Hasan Madani",
                        "url": "https://www.zafarulhasan.com"
                    }
                }
            },
            {
                "@type": "ListItem",
                "position": 3,
                "item": {
                    "@type": "Event",
                    "name": "Tafseer Surah Yaseen Aur Juz 23 – After Taraweeh",
                    "description": "Daily online Tafseer of Surah Yaseen and Juz 23 by Sheikh Zafar ul Hasan Madani, streamed live on YouTube after Taraweeh prayers.",
                    "eventSchedule": {
                        "@type": "Schedule",
                        "repeatFrequency": "P1D",
                        "byDay": [
                            "https://schema.org/Saturday",
                            "https://schema.org/Sunday",
                            "https://schema.org/Monday",
                            "https://schema.org/Tuesday",
                            "https://schema.org/Wednesday",
                            "https://schema.org/Thursday",
                            "https://schema.org/Friday"
                        ],
                        "startTime": "20:30",
                        "endTime": "23:00",
                        "startDate": "2026-03-01",
                        "endDate": "2026-03-30"
                    },
                    "eventStatus": "https://schema.org/EventScheduled",
                    "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
                    "location": {
                        "@type": "VirtualLocation",
                        "url": "https://youtube.com/Zafarulhasan"
                    },
                    "organizer": {
                        "@type": "Person",
                        "name": "Sheikh Zafar ul Hasan Madani",
                        "url": "https://www.zafarulhasan.com"
                    }
                }
            }
        ]
    }

    return {
        title: `Ramadan Urdu Lectures in Dubai, UAE by Sheikh Zafarulhasan Madani`,
        openGraph: {
            title: `Ramadan Urdu Lectures in Dubai, UAE by Sheikh Zafarulhasan Madani`,
            images: [
                `https://www.zafarulhasan.com/images/icon-512x512.png`,
            ],
            url: `https://www.zafarulhasan.com/ramadan-schedule-1447-2026`,
            siteName: "Sheikh Zafarulhasan Madani",
        },
        category: "Education",

        keywords: `islamic center dubai, islamic classes dubai, Ramadan 2026 schedule Dubai, islamic urdu lectures in dubai, islamic urdu teacher, Ramadan 2026 schedule Dubai, Sheikh Zafar ul Hasan Madani, Urdu Islamic lectures UAE, surah yaseen tafseer urdu, Dubai prayer times 1447`,
        alternates: {
            canonical: canonicalUrl,
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                noimageindex: false,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        other: {
            "script:ld+json": JSON.stringify(faqSchema),
        }
    };
}

export default function Ramadan2026() {
    return (
        <div>
            <RamadanSchedule />
        </div>
    )
}
