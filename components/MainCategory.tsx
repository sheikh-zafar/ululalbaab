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
  { title: "Dawrah Ilmiyyah (Mukhtasar)", src: "/images/categories/6.png", link: "/duroos/Dawrah-Ilmiyyah-(Mukhtasar)" },
  { title: "Dawrah Ilmiyyah (Taweel)", src: "/images/categories/5.png", link: "/duroos/Dawrah-Ilmiyyah-(Taweel)" },
  { title: "Tafseerul Quran", src: "/images/categories/2.png", link: "/duroos/Dawrah-Ilmiyyah-(Mukhtasar)/raful-malam" },
  { title: "Jummu'ah Khutbah", src: "/images/categories/1.png", link: "/duroos/Jummu'ah-Khutbah" },
  { title: "Arkan Al Islam", src: "/images/categories/3.png", link: "/duroos/Arkan-Al-Islam" },
  { title: "Mausamiat", src: "/images/categories/4.png", link: "/duroos/Mausamiat" },
  { title: "Aam Duroos", src: "/images/categories/7.png", link: "/duroos/Aam-Duroos" },
  { title: "Sister's section", src: "/images/categories/8.png", link: "/duroos/Sister's-section" },
  { title: "Tareeq Ahlul Hadith", src: "/images/categories/9.png", link: "/duroos/Tareeq-Ahlul-Hadith" },
];

export default function MainCategory() {
  return (
    <Container maxWidth={false} disableGutters className="xxl:mt-20 xl:mt-20 lg:mt-20 sm:mt-12 md:mt-12 s:mt-8 xs:mt-8 xxs:mt-8" sx={{ textAlign: "center",  overflow: "hidden" }}>
          <Box sx={{ width: "100%", overflow: "hidden" }}>
        <Slider {...settings}>
          {duroos.map((book, index) => (
            <Box key={index} textAlign="center" px={0.5} py={2}>
              <Link href={book.link || "#"} passHref>
                <Image
                  alt={book.title}
                  src={book.src}
                  width={400}
                  height={600}
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

             
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
}
