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
  centerMode: false,
  centerPadding: '0px',
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
const books = [
  { title: "Juz 28", src: "/images/tafseer/1.png", link: "/duroos/Tafseerul-Quran/juz-28afseerul-Quran/juz-27" },
  { title: "Surah Al-Fathiha", src: "/images/tafseer/2.png", link: "/duroos/Tafseerul-Quran/surah-al-fathiha" },
  { title: "Juz Tabarak", src: "/images/tafseer/3.png", link: "/duroos/Tafseerul-Quran/juz-tabarak" },
  { title: "Kuch Lamhaat quran ki ayaton ke sath", src: "/images/tafseer/4.png", link: "/duroos/Tafseerul-Quran/kuch-lamhaat-quran-ki-ayaton-ke-sath" },
  { title: "Surah Al-Baqarah", src: "/images/tafseer/5.png", link: "/duroos/Tafseerul-Quran/surah-al-baqarah" },
  { title: "Surah Al An'aam", src: "/images/tafseer/6.png", link: "/duroos/Tafseerul-Quran/surah-al-anaam" },
  { title: "Surah Al-A'raf", src: "/images/tafseer/7.png", link: "/duroos/Tafseerul-Quran/surah-al-araf" },
  { title: "Surah Ibrahim", src: "/images/tafseer/8.png", link: "/duroos/Tafseerul-Quran/surah-ibrahim" },
  { title: "Surah Al-Hijr", src: "/images/tafseer/9.png", link: "/duroos/Tafseerul-Quran/surah-al-hijr" },
  { title: "Surah Al-Ahzab", src: "/images/tafseer/10.png", link: "/duroos/Tafseerul-Quran/surah-al-ahzab" },
  { title: "Surah Saba", src: "/images/tafseer/11.png", link: "/duroos/Tafseerul-Quran/surah-saba" },
  { title: "Surah Al-Hujurat", src: "/images/tafseer/12.png", link: "/duroos/Tafseerul-Quran/surah-al-hujurat" },
];

export default function Tafseer() {
  return (
    <Container maxWidth={false} disableGutters sx={{ textAlign: "center", mb: 20, mt: 20, overflow: "hidden" }}>
      <h2 className="text-dustygray text-center text-5xl lg:text-4xl sm:text-2xl xs:text-xl font-extrabold font-sans ">
        Tafseerul Quran
      </h2>
      <hr className="bg-bgcolor text-2xl" />
      <Box sx={{ width: "100%", overflow: "hidden" }}>
        <Slider {...settings}>
          {books.map((book, index) => (
            <Box key={index} textAlign="center" px={0.5} py={2}>
              <Link href={book.link || "#"} passHref>
                <Image
                  alt={book.title}
                  src={book.src}
                  width={300}
                  height={500}
                  className="border-2 border-black mx-auto"
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

              <Link
                href={book.link || "#"}
                className="inline-block bg-button-primary text-whiterock rounded-xl hover:shadow-2xl px-4 py-2 text-sm font-semibold transition duration-200"
              >
                Listen
              </Link>
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
}
