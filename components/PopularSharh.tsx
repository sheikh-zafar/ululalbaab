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
    <Container maxWidth={false} disableGutters sx={{ textAlign: "center", mb: 20, mt:20, overflow: "hidden" }}>
      <h2 className="text-dustygray text-center text-5xl lg:text-4xl sm:text-2xl xs:text-xl font-extrabold font-sans mb-4">
        Popular Books Taught By Him (حفظه اللّه)
      </h2>
      <hr className="border-t-2 border-bgcolor w-24 mx-auto mb-8" />

      <Box sx={{ width: "100%", overflow: "hidden" }}>
        <Slider {...settings}>
          {books.map((book, index) => (
            <Box key={index} textAlign="center" px={1} py={2}>
              <Link href={book.link || "#"} passHref>
                <Image
                  alt={book.title}
                  src={book.src}
                  width={200}
                  height={300}
                  className="rounded-lg border-2 border-black mx-auto"
                />
              </Link>

              <Typography
                variant="h6"
                fontWeight="bold"
                my={2}
                color="#6c6c6c"
                className="text-lg xs:text-base"
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
