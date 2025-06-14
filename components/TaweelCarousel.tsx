"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { Box, Typography, Container } from "@mui/material";

// Slick settings
const settings = {
    arrows: true,
    pauseOnHover: true,
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
    ],
};

// Book data
const duroos = [
    { title: "Al Arba'oona Nawawiyyah", src: "/images/duroos-mview/6.png", link: "/duroos/Dawrah-Ilmiyyah-(Taweel)/al-arbaoona-nawawiyyah" },
    { title: "Sharh As-Sunnah", src: "/images/duroos-mview/5.png", link: "/duroos/Dawrah-Ilmiyyah-(Taweel)/sharh-as-sunnah" },
    { title: "Bulugh al-Maram", src: "/images/duroos-mview/2.png", link: "/duroos/Dawrah-Ilmiyyah-(Taweel)/bulugh-al-maram" },
    { title: "Usool ath-Thalathah", src: "/images/duroos-mview/1.png", link: "/duroos/Dawrah-Ilmiyyah-(Taweel)/usool-al-thalatha" },
    { title: "Kitab at-Tawheed", src: "/images/duroos-mview/3.png", link: "/duroos/Dawrah-Ilmiyyah-(Taweel)/kitab-at-tawheed" },
    { title: "At Targeeb wat Tarheeb Munzari", src: "/images/duroos-mview/4.png", link: "/duroos/Dawrah-Ilmiyyah-(Taweel)/at-targeeb-wat-tarheeb" },
    { title: "Shamail al-Muhammadiyah", src: "/images/duroos-mview/7.png", link: "/duroos/Dawrah-Ilmiyyah-(Taweel)/shamail-al-muhammadiyah" },
    { title: "Riyad us-Saliheen", src: "/images/duroos-mview/8.png", link: "/duroos/Dawrah-Ilmiyyah-(Taweel)/riyad-us-saliheen" },
];

export default function TaweelCarousel() {
    return (
        <div className="xxl:mx-16 xl:mx-16 lg:mx-16 sm:mx-12 md:mx-12 xxs:mx-5 xs:mx-5 s:mx-5 xxl:mt-20 xl:mt-20 lg:mt-20 sm:mt-12 md:mt-12 s:mt-8 xs:mt-8 xxs:mt-8">
        
            <h2 className="text-dustygray xl:text-4xl xxl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl xs:text-xl s:text-xl font-extrabold font-poppins">
       Dawrah Ilmiyyah (Taweel)
      </h2>
      <h6 className="text-black xl:text-4xl xxl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl xs:text-xl s:text-xl pb-5 font-aref">(دورہ علمیہ (طویل))</h6>

            <hr className="bg-bgcolor text-2xl" />
            <Box sx={{ width: "100%", overflow: "hidden" }}>
                <Slider {...settings}>
                    {duroos.map((book, index) => (
                        <Box key={index} textAlign="center" px={0.5} py={2}>
                            <Link href={book.link || "#"} passHref>
                                <Image
                                    alt="Placeholder 197 x 312.8"
                                    src="https://via.placeholder.com/197x313?text=Placeholder+197x312.8"
                                    width={197}
                                    height={313}
                                    className="border-2 border-gray-400 rounded"
                                    style={{ width: "100%", height: "auto", objectFit: "cover", backgroundColor: "#e0e0e0" }}
                                />
                            </Link>

                            <Typography
                                variant="h6"
                                fontWeight="bold"
                                my={2}
                                color="#6c6c6c"
                                className="xl:text-lg lg:text-lg xxl:text-lg sm:text-lg md:text-lg xs:text-base xxs:text-base s:text-base"
                            >
                                {book.title}
                            </Typography>


                        </Box>
                    ))}
                </Slider>
            </Box>
        </div>
    );
}
