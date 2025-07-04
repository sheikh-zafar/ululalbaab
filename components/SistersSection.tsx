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
  slidesToShow: 1,
  slidesToScroll: 1,
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
  { title: "Nisa", src: "/images/tafseer/1.png", link: "/duroos/Sister's-section/nisa" },
 ];

export default function Tafseer() {
  return (
    <Container maxWidth={false} disableGutters className="xxl:mt-20 xl:mt-20 lg:mt-20 sm:mt-12 md:mt-12 s:mt-8 xs:mt-8 xxs:mt-8" sx={{ textAlign: "center", overflow: "hidden" }}>
      <h2 className="text-dustygray text-center text-5xl lg:text-4xl sm:text-2xl xs:text-xl font-extrabold font-sans ">
        Tafseer
      </h2>
      <hr className="bg-bgcolor text-2xl" />
      <Box sx={{ width: "100%", overflow: "hidden" }}>
        <Slider {...settings}>
          {books.map((book, index) => (
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
    </Container>
  );
}
