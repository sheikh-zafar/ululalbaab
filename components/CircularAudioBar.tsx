"use client";

import React, { useRef, useState, useEffect } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { fetchAudioUrl } from "../app/util/fetchUrl"; // ✅ adjust if needed

const CircularGradientSectorPlayer: React.FC = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const svgRef = useRef<SVGSVGElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [audioUrl, setAudioUrl] = useState<string | null>(null);

    const audioFilePath = "Tafseer Surah AL-LAIL-Part-1@date06-12-18.mp3";
    const [audioList, setAudioList] = useState<{ name: string; url: string }[]>([]);

    useEffect(() => {
        fetch('/api/list-audios')
            .then((res) => res.json())
            .then(setAudioList)
            .catch((err) => console.error('Error loading audio list', err));
    }, []);


    const center = 50;
    const baseRadius = 45;
    const sectorRadius = isPlaying ? baseRadius + 3 : baseRadius;
    const angle = (progress / 100) * 360;

    const polarToCartesian = (angleDeg: number, radius: number) => {
        const angleRad = ((angleDeg - 90) * Math.PI) / 180;
        return {
            x: center + radius * Math.cos(angleRad),
            y: center + radius * Math.sin(angleRad),
        };
    };

    const describeSector = (endAngle: number) => {
        if (endAngle === 0) return "";
        const start = polarToCartesian(0, sectorRadius);
        const end = polarToCartesian(endAngle, sectorRadius);
        const largeArcFlag = endAngle <= 180 ? "0" : "1";

        return `
            M ${center} ${center}
            L ${start.x} ${start.y}
            A ${sectorRadius} ${sectorRadius} 0 ${largeArcFlag} 1 ${end.x} ${end.y}
            Z
        `;
    };

    const angleFromEvent = (clientX: number, clientY: number) => {
        const svg = svgRef.current;
        if (!svg) return 0;

        const rect = svg.getBoundingClientRect();
        const x = clientX - rect.left - rect.width / 2;
        const y = clientY - rect.top - rect.height / 2;
        const angleRad = Math.atan2(y, x);
        const angleDeg = (angleRad * 180) / Math.PI;
        return (angleDeg + 360 + 90) % 360;
    };

    const handleSeek = (angleDeg: number) => {
        const audio = audioRef.current;
        if (!audio || isNaN(audio.duration)) return;
        const newTime = (angleDeg / 360) * audio.duration;
        audio.currentTime = newTime;
        setProgress((angleDeg / 360) * 100);
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;
        const angleDeg = angleFromEvent(e.clientX, e.clientY);
        handleSeek(angleDeg);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
    };

    const handleMouseDown = (e: React.MouseEvent<SVGCircleElement>) => {
        setIsDragging(true);
        const angleDeg = angleFromEvent(e.clientX, e.clientY);
        handleSeek(angleDeg);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
    };

    const togglePlay = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (audio.paused) {
            audio.play();
            setIsPlaying(true);
        } else {
            audio.pause();
            setIsPlaying(false);
        }
    };

    const handlePrevious = () => {
        if (!audioRef.current) return;
        audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 10); // Go back 10s
    };

    const handleNext = () => {
        if (!audioRef.current || isNaN(audioRef.current.duration)) return;
        audioRef.current.currentTime = Math.min(
            audioRef.current.duration,
            audioRef.current.currentTime + 10
        ); // Skip 10s
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateProgress = () => {
            const percent = (audio.currentTime / audio.duration) * 100;
            setProgress(isNaN(percent) ? 0 : percent);
        };

        const reset = () => {
            setIsPlaying(false);
            setProgress(0);
        };

        audio.addEventListener("timeupdate", updateProgress);
        audio.addEventListener("ended", reset);

        return () => {
            audio.removeEventListener("timeupdate", updateProgress);
            audio.removeEventListener("ended", reset);
        };
    }, []);

    useEffect(() => {
        fetchAudioUrl(audioFilePath)
            .then(setAudioUrl)
            .catch((err: unknown) => console.error("Failed to fetch audio URL:", err));
    }, []);

    const startNeedle = polarToCartesian(0, baseRadius);
    const progressNeedle = polarToCartesian(angle, baseRadius);

    return (
        <div>

            <div className="w-60 h-60 relative mx-auto">
                <div className="absolute top-1/2 -left-10 transform -translate-y-1/2 z-10">
                    <button
                        onClick={handlePrevious}
                        className="bg-white rounded-full shadow p-2 hover:bg-gray-100 transition"
                        aria-label="Previous"
                    >
                        <ChevronLeftIcon sx={{ fontSize: 28, color: "#6c6c6c" }} />
                    </button>
                </div>

                <svg
                    ref={svgRef}
                    viewBox="0 0 100 100"
                    className="w-full h-full cursor-pointer"
                >
                    <defs>
                        <radialGradient id="sunflowerSector" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#e4bc24" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#facc15" stopOpacity="1" />
                        </radialGradient>
                    </defs>

                    <circle cx={center} cy={center} r={baseRadius} stroke="#e5e7eb" strokeWidth="2" fill="none" />
                    <circle cx={center} cy={center} r={baseRadius * 0.7} stroke="#d1d5db" strokeWidth="1" fill="none" />
                    <circle cx={center} cy={center} r={baseRadius * 0.4} stroke="#f3f4f6" strokeWidth="1" fill="none" />

                    {progress > 0 && (
                        <path d={describeSector(angle)} fill="url(#sunflowerSector)" style={{ transition: "all 0.3s ease" }} />
                    )}

                    <line x1={center} y1={center} x2={startNeedle.x} y2={startNeedle.y} stroke="#e4bc24" strokeWidth={1.5} />
                    <circle cx={startNeedle.x} cy={startNeedle.y} r={3.5} fill="#e4bc24" stroke="#facc15" strokeWidth={1} />

                    <line x1={center} y1={center} x2={progressNeedle.x} y2={progressNeedle.y} stroke="#e4bc24" strokeWidth={1.5} />

                    <circle
                        cx={progressNeedle.x}
                        cy={progressNeedle.y}
                        r={isPlaying ? 4.5 : 3}
                        fill="#e4bc24"
                        stroke="#facc15"
                        strokeWidth={0.09}
                        onMouseDown={handleMouseDown}
                        style={{ cursor: "pointer", transition: "all 0.3s ease-in-out" }}
                    />
                </svg>

                <button
                    onClick={togglePlay}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
                    aria-label={isPlaying ? "Pause" : "Play"}
                >
                    {isPlaying ? (
                        <PauseIcon sx={{ color: "#6c6c6c", fontSize: 32 }} />
                    ) : (
                        <PlayArrowIcon sx={{ color: "#6c6c6c", fontSize: 32 }} />
                    )}
                </button>

                <div className="absolute top-1/2 -right-10 transform -translate-y-1/2 z-10">
                    <button
                        onClick={handleNext}
                        className="bg-white rounded-full shadow p-2 hover:bg-gray-100 transition"
                        aria-label="Next"
                    >
                        <ChevronRightIcon sx={{ fontSize: 28, color: "#6c6c6c" }} />
                    </button>
                </div>

                {audioUrl && <audio ref={audioRef} src={audioUrl} preload="metadata" />}
            </div>

            <div className="mt-4 px-2 max-h-60 overflow-y-auto">
                <table className="w-full text-sm text-left border">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700">
                            <th className="px-2 py-1">Title</th>
                            <th className="px-2 py-1 text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {audioList.map((audio, idx) => (
                            <tr key={idx} className="border-t hover:bg-gray-50">
                                <td className="px-2 py-1">{audio.name}</td>
                                <td className="px-2 py-1 text-right">
                                    <button
                                        className="text-blue-600 hover:underline"
                                        onClick={() => {
                                            if (audioRef.current) {
                                                audioRef.current.src = audio.url;
                                                audioRef.current.play();
                                                setIsPlaying(true);
                                            }
                                        }}
                                    >
                                        Play
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default CircularGradientSectorPlayer;
