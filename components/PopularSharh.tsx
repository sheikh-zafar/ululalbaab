"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { Box } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@mui/material/IconButton";
import { CustomArrowProps } from "react-slick";
function NextArrow(props: CustomArrowProps) {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        right: 5,
        transform: "translateY(-50%)",
        zIndex: 2,
        bgcolor: "#bb8732",
        border: "1px solid black",
        "&:hover": { bgcolor: "#a7772d" },
      }}
    >
      <ChevronRightIcon />
    </IconButton>
  );
}

function PrevArrow(props: CustomArrowProps) {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        left: 5,
        transform: "translateY(-50%)",
        zIndex: 2,
        bgcolor: "#bb8732",
        border: "1px solid black",
        "&:hover": { bgcolor: "#a7772d" },
      }}
    >
      <ChevronLeftIcon />
    </IconButton>
  );
}

const settings = {
  arrows: true,
  pauseOnHover: true,
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: false,
  centerPadding: '0px',
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
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
  { title: "Arbaoona Nawawi", src: "/images/books/arbaoon.png", link: "https://www.zafarulhasan.com/duroos/dawrah-ilmiyyah-mukhtasar/al-arbaoona-an-nawawi" },
  { title: "Targeeb wat Tarheeb", src: "/images/books/targeeb.png", link: "https://www.zafarulhasan.com/duroos/dawrah-ilmiyyah-taweel/at-targeeb-wat-tarheeb-muzari" },
  { title: "Raful Malam", src: "/images/books/rafulmalam.png", link: "https://www.zafarulhasan.com/duroos/dawrah-ilmiyyah-mukhtasar/raful-malam" },
  { title: "Riyad Us saliheen", src: "/images/books/riyadussaliheen.png", link: "https://www.zafarulhasan.com/duroos/dawrah-ilmiyyah-taweel/riyad-us-saliheen" },
  { title: "Bulugh al Maram", src: "/images/books/bulugh.png", link: "https://www.zafarulhasan.com/duroos/dawrah-ilmiyyah-taweel/bulugh-al-maram" },
  { title: "Kitab At Tawheed", src: "/images/books/kitabattawheed.png", link: "https://www.zafarulhasan.com/duroos/dawrah-ilmiyyah-taweel/kitab-at-tawheed" },
  { title: "Shamail Muhammadiyah", src: "/images/books/shamail.png", link: "https://www.zafarulhasan.com/duroos/dawrah-ilmiyyah-taweel/shamail-al-muhammadiyah" },
  { title: "Sharh as Sunnah", src: "/images/books/sharhassunnah.png", link: "https://www.zafarulhasan.com/duroos/dawrah-ilmiyyah-taweel/sharh-as-sunnah" },
  { title: "Usool Ath thalathah", src: "/images/books/usoolassalasah.png", link: "https://www.zafarulhasan.com/duroos/dawrah-ilmiyyah-taweel/usool-al-thalatha" },
  { title: "Tadween As Sunnah", src: "/images/books/tadween.png", link: "https://www.zafarulhasan.com/duroos/dawrah-ilmiyyah-mukhtasar/tadween-as-sunnah" },
];

export default function BookCarousel() {
  return (
    <div className="xxl:mx-16 xl:mx-16 lg:mx-16 sm:mx-12 md:mx-12 xxs:mx-5 xs:mx-5 s:mx-5 xxl:mt-20 xl:mt-20 lg:mt-20 sm:mt-12 md:mt-12 s:mt-8 xs:mt-8 xxs:mt-8">

      <Box sx={{ width: "100%", overflow: "hidden", position: "relative" }}>
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
