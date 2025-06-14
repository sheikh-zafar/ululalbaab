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
  { title: "Dawrah Ilmiyyah (Mukhtasar)", src: "/images/duroos-mview/6.png", link: "/duroos/Dawrah-Ilmiyyah-(Mukhtasar)" },
  { title: "Dawrah Ilmiyyah (Taweel)", src: "/images/duroos-mview/5.png", link: "/duroos/Dawrah-Ilmiyyah-(Taweel)" },
  { title: "Tafseerul Quran", src: "/images/duroos-mview/2.png", link: "/duroos/Dawrah-Ilmiyyah-(Mukhtasar)/raful-malam" },
  { title: "Jummu'ah Khutbah", src: "/images/duroos-mview/1.png", link: "/duroos/Jummu'ah-Khutbah" },
  { title: "Arkan Al Islam", src: "/images/duroos-mview/3.png", link: "/duroos/Arkan-Al-Islam" },
  { title: "Mausamiat", src: "/images/duroos-mview/4.png", link: "/duroos/Mausamiat" },
  { title: "Aam Duroos", src: "/images/duroos-mview/7.png", link: "/duroos/Aam-Duroos" },
  { title: "Sister's section", src: "/images/duroos-mview/8.png", link: "/duroos/Sister's-section" },
  { title: "Tareeq Ahlul Hadith", src: "/images/duroos-mview/9.png", link: "/duroos/Tareeq-Ahlul-Hadith" },
];

export default function MainCategory() {
  return (
    <div className="xxl:mx-16 xl:mx-16 lg:mx-16 sm:mx-12 md:mx-12 xxs:mx-5 xs:mx-5 s:mx-5 xxl:mt-20 xl:mt-20 lg:mt-20 sm:mt-12 md:mt-12 s:mt-8 xs:mt-8 xxs:mt-8" >
      <h2 className="text-dustygray xl:text-4xl xxl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl xs:text-xl s:text-xl font-extrabold font-poppins">
        Main Duroos Category
      </h2>
      <h6 className="text-black xl:text-4xl xxl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl xs:text-xl s:text-xl pb-5 font-aref">(مرکزی سبق کی قسم)</h6>

      <hr className="bg-bgcolor text-2xl" />
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
                  className="border-2 border-dustygray mx-auto"
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
