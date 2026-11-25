"use client";

import { useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import quranJson from "../../public/lib/drs.json";

type Status = "completed" | "ongoing" | "upcoming";

interface Video {
    videoId: string;
    playlistId?: string;
    title: string;
    url: string;
    thumbnail?: string;
    uploadDate?: string;
}

interface Surah {
    number: number;
    slug: string;
    arabic: string;
    title: string;
    juz: number;
    status?: Status; // optional: "completed" | "ongoing" | "upcoming"
    author?: string;
    description?: string;
    image: string;
    YTplaylistlink?: string;
    videos: Video[];
}

interface QuranData {
    category: string;
    description: string;
    image: string;
    subcategories: Surah[];
}

const quran = quranJson as unknown as QuranData;

type TabId = "surah" | "juz";

const HEX =
    "[clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]";

const ARABIC_FONT = { fontFamily: "'Amiri', 'Scheherazade New', serif" };

/* ---------- Status ---------- */
// If `status` isn't set in the JSON: no videos = upcoming, has videos = ongoing.
// Set "status": "completed" on a surah once its tafseer is finished.
function getStatus(s: Surah): Status {
    if (s.status) return s.status;
    return s.videos?.length > 0 ? "ongoing" : "upcoming";
}

const STATUS_META: Record<
    Status,
    { label: string; dot: string; glow: string; ring: string }
> = {
    completed: {
        label: "Completed",
        dot: "bg-sky-500",
        glow: "shadow-[0_0_6px_2px_rgba(14,165,233,0.7)]",
        ring: "bg-sky-400",
    },
    ongoing: {
        label: "Ongoing",
        dot: "bg-emerald-500",
        glow: "shadow-[0_0_6px_2px_rgba(16,185,129,0.7)]",
        ring: "bg-emerald-400",
    },
    upcoming: {
        label: "Coming Soon",
        dot: "bg-amber-400",
        glow: "shadow-[0_0_6px_2px_rgba(251,191,36,0.75)]",
        ring: "bg-amber-300",
    },
};

function StatusDot({ status }: { status: Status }) {
    const { label, dot, glow, ring } = STATUS_META[status];
    return (
        <span
            title={label}
            aria-label={label}
            className="relative inline-flex h-2.5 w-2.5 shrink-0"
        >
            {/* soft pulsing halo */}
            <span
                className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-60 ${ring}`}
            />
            {/* glowing core */}
            <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${dot} ${glow}`} />
        </span>
    );
}

function Hexagon({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <div
            className={`flex shrink-0 items-center justify-center bg-primarytext font-bold text-white ${HEX} ${className}`}
        >
            {children}
        </div>
    );
}

/* ---------- Legend ---------- */
function Legend({ counts }: { counts: Record<Status, number> }) {
    const order: Status[] = ["completed", "ongoing", "upcoming"];
    return (
        <div className="mb-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-secondarytext">
            {order.map((st) => (
                <span key={st} className="flex items-center gap-2">
                    <StatusDot status={st} />
                    {STATUS_META[st].label}
                    <span className="text-dustygray">({counts[st]})</span>
                </span>
            ))}
        </div>
    );
}

/* ---------- Surah card ---------- */
function SurahCard({ surah, basePath }: { surah: Surah; basePath: string }) {
    const count = surah.videos?.length ?? 0;
    return (
        <Link
            href={`${basePath}/${surah.slug}`}
            className="group relative flex items-center gap-4 rounded-xl border border-whiterock bg-bgcolor p-4 shadow-sm transition hover:border-primarytext hover:shadow-md"
        >
            <Hexagon className="h-14 w-14 text-lg transition group-hover:bg-zafarlogo">
                {surah.number}
            </Hexagon>

            <div className="min-w-0 flex-1">
                <p
                    dir="rtl"
                    className="truncate text-left text-2xl leading-tight text-mughal"
                    style={ARABIC_FONT}
                >
                    {surah.arabic}
                </p>
                <p className="truncate text-sm text-secondarytext">{surah.title}</p>
            </div>

            <div className="flex flex-col items-end self-stretch text-right">
                <span className="rounded-full bg-whiterock px-2 py-0.5 text-xs font-semibold text-primarytext">
                    Juz {surah.juz}
                </span>
                <span className="mt-1 flex items-center gap-1.5 text-xs text-dustygray">
                    ({count})
                    <StatusDot status={getStatus(surah)} />
                </span>
            </div>
        </Link>
    );
}

/* ---------- Juz card ---------- */
function JuzCard({
    juz,
    surahs,
    basePath,
}: {
    juz: number;
    surahs: Surah[];
    basePath: string;
}) {
    return (
        <div className="self-start rounded-xl border border-whiterock bg-bgcolor p-4 shadow-sm">
            <div className="mb-3 flex items-center gap-3 border-b border-whiterock pb-3">
                <Hexagon className="h-12 w-12 text-base">{juz}</Hexagon>
                <h3 className="text-lg font-semibold text-primarytext">Juz {juz}</h3>
                <span className="ml-auto text-xs text-dustygray">
                    {surahs.length} {surahs.length === 1 ? "Surah" : "Surahs"}
                </span>
            </div>

            <ul className="space-y-1.5">
                {surahs.map((s) => (
                    <li key={s.number}>
                        <Link
                            href={`${basePath}/${s.slug}`}
                            className="flex items-center justify-between gap-3 rounded-md px-2 py-1.5 text-sm text-secondarytext transition hover:bg-whiterock hover:text-primarytext"
                        >
                            <span className="flex items-center gap-2">
                                <span className="w-7 text-xs text-dustygray">{s.number}.</span>
                                {s.title}
                                <span className="text-xs text-dustygray">
                                    ({s.videos?.length ?? 0})
                                </span>
                            </span>
                            <span className="flex items-center gap-2">
                                <span dir="rtl" className="text-lg text-mughal" style={ARABIC_FONT}>
                                    {s.arabic}
                                </span>
                                <StatusDot status={getStatus(s)} />
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

/* ---------- Tabs ---------- */
interface QuranTabsProps {
    basePath?: string;
    items?: Surah[];
}

export default function QuranTabs({ basePath = "/tafseer", items }: QuranTabsProps) {
    const [tab, setTab] = useState<TabId>("surah");
    const surahs = items ?? quran.subcategories;

    const juzGroups = useMemo<[number, Surah[]][]>(() => {
        const map = new Map<number, Surah[]>();
        quran.subcategories.forEach((s) => {
            const list = map.get(s.juz) ?? [];
            list.push(s);
            map.set(s.juz, list);
        });
        return [...map.entries()].sort((a, b) => a[0] - b[0]);
    }, []);

    const counts = useMemo(() => {
        const c: Record<Status, number> = { completed: 0, ongoing: 0, upcoming: 0 };
        quran.subcategories.forEach((s) => (c[getStatus(s)] += 1));
        return c;
    }, []);

    const tabs: { id: TabId; label: string }[] = [
        { id: "surah", label: "Surah" },
        { id: "juz", label: "Juz" },
    ];

    return (
        <section className="mx-auto w-full max-w-7xl px-4 py-8">
            <div className="mb-6 flex justify-center">
                <div className="inline-flex rounded-full bg-whiterock p-1">
                    {tabs.map((t) => (
                        <button
                            key={t.id}
                            type="button"
                            onClick={() => setTab(t.id)}
                            className={`rounded-full px-8 py-2 text-sm font-semibold transition ${tab === t.id
                                ? "bg-primarytext text-white shadow"
                                : "text-secondarytext hover:text-primarytext"
                                }`}
                        >
                            {t.label}
                        </button>
                    ))}
                </div>
            </div>

            <Legend counts={counts} />

            {tab === "surah" ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {quran.subcategories.map((s) => (
                        <SurahCard key={s.number} surah={s} basePath={basePath} />
                    ))}
                </div>
            ) : (
                <div className="columns-1 gap-4 md:columns-2 lg:columns-3">
                    {juzGroups.map(([juz, surahs]) => (
                        <div key={juz} className="mb-4 break-inside-avoid">
                            <JuzCard juz={juz} surahs={surahs} basePath={basePath} />
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}