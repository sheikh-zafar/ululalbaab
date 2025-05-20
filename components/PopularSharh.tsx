"use client"

import React from "react"
import Slider from "react-slick"
import Image from "next/image"
import Link from "next/link"
import { Box, Typography, Container } from "@mui/material"

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
}

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
]

export default function BookCarousel() {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ textAlign: "center", mb: 20, overflow: "hidden" }} // Reduced margin-top
    >
      <h6 className="text-dustygray text-center text-5xl lg:text-4xl sm:text-2xl xs:text-2xl xxs:text-2xl md:text-4xl font-extrabold font-sans">
        Popular Books Taught By Him (حفظه اللّه)
      </h6>
      <hr className="bg-bgcolor text-2xl" />
      <Box sx={{ width: "100%", overflow: "hidden", mt: 5 }}>
        {" "}
        {/* Changed 100vw to 100% */}
        <Slider {...settings}>
          {books.map((book, index) => (
            <Box key={index} textAlign='center' p={1}>
              {" "}
              {/* Reduced padding */}
              <Link href='/' passHref>
                <Image
                  alt={book.title}
                  src={book.src}
                  width={200}
                  height={300}
                  style={{ borderRadius: "8px", border: "3px solid #000" }}
                />
              </Link>
              <Typography variant='h6' fontWeight='bold' my={2} color="#6c6c6c">
                {book.title}
              </Typography>
              <Link
                href="/about"
                className="bg-button-primary text-whiterock rounded-xl hover:shadow-2xl p-3 text-base font-bold font-mono "
              >
                Listen
              </Link>
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  )
}
