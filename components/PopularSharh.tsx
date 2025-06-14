"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { Box,  Container } from "@mui/material";

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
  { title: "Arbaoona Nawawi", src: "/images/books/arbaoon.png", link: "/duroos/Dawrah-Ilmiyyah-(Mukhtasar)/al-arbaoona-an-nawawi" },
  { title: "Targeeb wat Tarheeb", src: "/images/books/targeeb.png", link: "" },
  { title: "Raful Malam", src: "/images/books/rafulmalam.png", link: "/duroos/Dawrah-Ilmiyyah-(Mukhtasar)/raful-malam" },
  { title: "Riyad Us saliheen", src: "/images/books/riyadussaliheen.png", link: "/duroos/Dawrah-Ilmiyyah-(Taweel)/riyad-us-saliheen" },
  { title: "Bulugh al Maram", src: "/images/books/bulugh.png", link: "/duroos/Dawrah-Ilmiyyah-(Taweel)/bulugh-al-maram" },
  { title: "Kitab At Tawheed", src: "/images/books/kitabattawheed.png", link: "/duroos/Dawrah-Ilmiyyah-(Mukhtasar)/kitab-At-tawheed" },
  { title: "Shamail Muhammadiyah", src: "/images/books/shamail.png", link: "/duroos/Dawrah-Ilmiyyah-(Taweel)/shamail-al-muhammadiyah" },
  { title: "Sharh as Sunnah", src: "/images/books/sharhassunnah.png", link: "/duroos/Dawrah-Ilmiyyah-(Taweel)/sharh-as-sunnah" },
  { title: "Usool Ath thalathah", src: "/images/books/usoolassalasah.png", link: "/duroos/Dawrah-Ilmiyyah-(Taweel)/usool-al-thalatha" },
  { title: "Tadween As Sunnah", src: "/images/books/tadween.png", link: "/duroos/Dawrah-Ilmiyyah-(Mukhtasar)/tadween-as-sunnah" },
];

export default function BookCarousel() {
  return (
    <div className="xxl:mx-16 xl:mx-16 lg:mx-16 sm:mx-12 md:mx-12 xxs:mx-5 xs:mx-5 s:mx-5 xxl:mt-20 xl:mt-20 lg:mt-20 sm:mt-12 md:mt-12 s:mt-8 xs:mt-8 xxs:mt-8">
      
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


            </Box>
          ))}
        </Slider>
      </Box>
    </div>
  );
}
