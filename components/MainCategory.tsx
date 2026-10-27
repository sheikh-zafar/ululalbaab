"use client";

import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import { Box } from "@mui/material";

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
    { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 2 } },
    { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 320, settings: { slidesToShow: 2, slidesToScroll: 1 } },
  ],
};

const duroos = [
  { title: "Dawrah Ilmiyyah (Mukhtasar)", link: "https://www.zafarulhasan.com/duroos/dawrah-ilmiyyah-mukhtasar" },
  { title: "Dawrah Ilmiyyah (Taweel)", link: "https://www.zafarulhasan.com/duroos/dawrah-ilmiyyah-taweel" },
  { title: "Tafseerul Quran", link: "https://www.zafarulhasan.com/duroos/tafseerul-quran" },
  { title: "Jummu'ah Khutbah", link: "https://www.zafarulhasan.com/comingsoon" },
  { title: "Arkan Al Islam", link: "https://www.zafarulhasan.com/comingsoon" },
  { title: "Mausamiat", link: "https://www.zafarulhasan.com/comingsoon" },
  { title: "Aam Duroos", link: "https://www.zafarulhasan.com/duroos/aam-duroos" },
  { title: "Sister's section", link: "https://www.zafarulhasan.com/comingsoon" },
  { title: "Tareeq Ahlul Hadith", link: "https://www.zafarulhasan.com/comingsoon" },
];

export default function MainCategory() {
  return (
    <div className="xxl:mx-16 xl:mx-16 lg:mx-16 sm:mx-12 md:mx-12 xxs:mx-5 xs:mx-5 s:mx-5 xxl:mt-20 xl:mt-20 lg:mt-20 sm:mt-12 md:mt-12 s:mt-8 xs:mt-8 xxs:mt-8">
      <h2 className="text-dustygray xl:text-4xl xxl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl xs:text-xl s:text-xl font-extrabold font-poppins">
        Main Duroos Category
      </h2>
      <h6 className="text-black xl:text-4xl xxl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl xs:text-xl s:text-xl pb-5 font-aref">
      </h6>

      <hr className="bg-bgcolor text-2xl" />

      <Box sx={{ width: "100%", overflow: "hidden" }}>
        <Slider {...settings}>
          {duroos.map((item, index) => (
            <Box key={index} px={1} py={3} textAlign="center">
              {/* Book front cover (not clickable) */}
              <div
                className="
                  relative mx-auto aspect-[2/3] w-full max-w-[220px]
                  bg-whiterock border border-dustygray
                  rounded-r-md rounded-l-sm overflow-hidden
                  shadow-[4px_6px_14px_rgba(0,0,0,0.25)]
                "
              >
                {/* Spine */}
                <div className="absolute left-0 top-0 bottom-0 w-3 bg-linear-to-r from-primarytext to-goldengrass" />
                <div className="absolute left-3 top-0 bottom-0 w-px bg-black/20" />

                {/* Inner decorative frame */}
                <div className="absolute inset-3 left-6 border border-primarytext/70 pointer-events-none" />

                {/* Cover content */}
                <div className="relative h-full flex flex-col items-center justify-center text-center pl-6 pr-4 py-6">
                  <span className="block w-10 h-0.5 bg-primarytext mb-4" />
                  <h3
                    className="
                      font-poppins font-bold text-dovegray leading-snug
                      xl:text-lg lg:text-lg xxl:text-lg md:text-base sm:text-base
                      xs:text-sm xxs:text-sm s:text-xs
                    "
                  >
                    {item.title}
                  </h3>
                  <span className="block w-10 h-0.5 bg-primarytext mt-4" />
                  {/* Link below the cover */}
                  <Link
                    href={item.link || "#"}
                    className="
                  inline-block mt-4 font-poppins font-semibold text-dovegray
                  underline underline-offset-4 decoration-primarytext
                  hover:text-primarytext transition-colors
                  xl:text-base lg:text-base md:text-base sm:text-sm
                  xs:text-sm xxs:text-sm s:text-xs
                "
                  >
                    View Duroos
                  </Link>
                </div>
              </div>


            </Box>
          ))}
        </Slider>
      </Box>
    </div>
  );
}