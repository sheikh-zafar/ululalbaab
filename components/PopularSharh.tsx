"use client"

import React from "react"
import Slider from "react-slick"
import Image from "next/image"
import Link from "next/link"
import { Box, Typography, Button, Container } from "@mui/material"

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
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

const books = [
  { title: "Arbaoona Nawawi", src: "/images/books/arbaoon.png" },
  { title: "Targeeb wat Tarheeb", src: "/images/books/targeeb.png" },
  { title: "Raful Malam", src: "/images/books/rafulmalam.png" },
  { title: "Riyad Us saliheen", src: "/images/books/riyadussaliheen.png" },
  { title: "Bulugh al Maram", src: "/images/books/bulugh.png" },
  { title: "Kitab At Tawheed", src: "/images/books/kitabattawheed.png" },
  { title: "Shamail Muhammadiyah", src: "/images/books/shamail.png" },
  { title: "Sharh as Sunnah", src: "/images/books/sharhassunnah.png" },
  { title: "Usool Ath thalathah", src: "/images/books/usoolassalasah.png" },
  { title: "Tadween As Sunnah", src: "/images/books/tadween.png" },
]

export default function BookCarousel() {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ textAlign: "center", mt: 5, overflow: "hidden" }} // Reduced margin-top
    >
      <Typography variant='h4' fontWeight='bold' gutterBottom>
        Popular Books
      </Typography>
      <Box sx={{ width: "100%", overflow: "hidden" }}>
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
              <Typography variant='h6' fontWeight='bold' mt={1}>
                {book.title}
              </Typography>
              <Button variant='contained' color='primary' sx={{ mt: 1 }}>
                Listen
              </Button>
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  )
}
