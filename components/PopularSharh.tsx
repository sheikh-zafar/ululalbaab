"use client";

import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { Box, IconButton, Modal } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";

const settings = {
  arrows: false,
  dots: false,
  infinite: true,
  centerMode: false,
  slidesToShow: 3.5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,

  responsive: [
    {
      breakpoint: 1440,
      settings: { slidesToShow: 5.5, slidesToScroll: 2 },
    },
    {
      breakpoint: 1024,
      settings: { slidesToShow: 5.5, slidesToScroll: 2 },
    },
    {
      breakpoint: 600,
      settings: { slidesToShow: 2.5, slidesToScroll: 1 },
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1.75, slidesToScroll: 1 },
    },
    {
      breakpoint: 320,
      settings: { slidesToShow: 1.75, slidesToScroll: 1 },
    },
  ],
};

const books = [
  { title: "Seerat e Rasool", src: "/popularvideo/seerat-sunday-itwaar.mp4", titletext: "ar raheek al makhtoom", link: "https://www.youtube.com/playlist?list=PLmZP1KIsC-hkaTgRkdELrXipQ9i_PwW2k" },
  { title: "Shobul Imaan", src: "/popularvideo/shuabiman-mon-peer.mp4", titletext: "Shobul Imaan", link: "https://www.youtube.com/playlist?list=PLmZP1KIsC-hkaTgRkdELrXipQ9i_PwW2k" },
  { title: "Riyad Us saliheen", src: "/popularvideo/riyad-mon-peer.mp4", titletext: "riyaz us saliheen", link: "https://www.zafarulhasan.com/duroos/dawrah-ilmiyyah-taweel/riyad-us-saliheen" },
  { title: "Imaan Baharein", src: "/popularvideo/imaanbaharein-tues.mp4", titletext: "sharah bulugh al maram", link: "https://www.youtube.com/zafarulhasan" },
  { title: "Tafseer Surah Nisa", src: "/popularvideo/4-Tafseer-Surah-An-Nisaa-Wed-Budh.mp4", titletext: "arbaeen e nawawi sharh", link: "https://www.youtube.com/playlist?list=PLmZP1KIsC-hkaTgRkdELrXipQ9i_PwW2k" },
  { title: "Bulugh al Maram", src: "/popularvideo/bulugalmaram-thurs.mp4", titletext: "sharah bulugh al maram", link: "https://www.zafarulhasan.com/duroos/dawrah-ilmiyyah-taweel/bulugh-al-maram" },
  { title: "Jummuah Khutbah", src: "/popularvideo/Jumah-khutba-fri.mp4", titletext: "sharah bulugh al maram", link: "https://www.youtube.com/zafarulhasan" },
  { title: "Targeeb wat Tarheeb", src: "/popularvideo/targeebtarheeb-fri.mp4", titletext: "sahih at targheeb wat tarheeb urdu", link: "https://www.zafarulhasan.com/duroos/dawrah-ilmiyyah-taweel/at-targeeb-wat-tarheeb-muzari" },
  { title: "Mahasin e Islam", src: "/popularvideo/mahsinislam-sat-hafta.mp4", titletext: "Mahsin Islam", link: "https://www.youtube.com/zafarulhasan" },
];

const arrowSx = {
  bgcolor: "#e1b722",
  borderRadius: "0px",
  border: "1px solid black",
  borderBottom: "4px solid #a8840d",
  color: "black",
  transition: "all 75ms linear",
  "&:hover": {
    bgcolor: "#ecc335",
    borderBottomColor: "#bfa122"
  },
  "&:active": {
    transform: "translateY(3px)",
    borderBottomWidth: "1px",
  },
};

// Individual card component with video preview and title below
function VideoCard({ book, onOpenModal }: { book: typeof books[0]; onOpenModal: (book: typeof books[0]) => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (video) {
      // Seek to the last frame as a thumbnail preview
      video.currentTime = Math.max(0, video.duration - 0.1);
    }
  };

  return (
    <div
      onClick={() => onOpenModal(book)}
      className="cursor-pointer inline-block text-center"
      title={book.titletext}
    >
      <video
        ref={videoRef}
        src={book.src}
        width={300}
        height={500}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onLoadedMetadata={handleLoadedMetadata}
        className="rounded-3xl mx-auto object-cover pointer-events-none overflow-hidden"
      />
      {/* Title displayed below the video */}
      <h3 className=" mt-2 font-semibold text-gray-800 text-sm sm:text-base px-1">
        {book.title}
      </h3>
    </div>
  );
}

export default function PopularSharh() {
  const sliderRef = useRef<Slider>(null);
  const [selectedVideo, setSelectedVideo] = useState<typeof books[0] | null>(null);

  return (
    <div className="xxl:mx-16 xl:mx-16 lg:mx-16 sm:mx-12 md:mx-12 xxs:mx-5 xs:mx-5 s:mx-5 xxl:mt-20 xl:mt-20 lg:mt-20 sm:mt-12 md:mt-12 s:mt-8 xs:mt-8 xxs:mt-8">
      {/* Header row: title on the left, left arrow + right arrow pushed to the right corner */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <h2 className="text-dustygray xl:text-4xl xxl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl xs:text-xl s:text-xl font-extrabold font-poppins">
          Weekly Duroos - ہفتہ وار
        </h2>

        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton
            size="small"
            sx={arrowSx}
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton
            size="small"
            sx={arrowSx}
            onClick={() => sliderRef.current?.slickNext()}
          >
            <ChevronRightIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Slider */}
      <Box sx={{ width: "100%", overflow: "hidden", position: "relative" }}>
        <Slider ref={sliderRef} {...settings}>
          {books.map((book, index) => (
            <Box key={index} sx={{ textAlign: "center" }} px={0.5} py={2}>
              <VideoCard book={book} onOpenModal={setSelectedVideo} />
            </Box>
          ))}
        </Slider>
      </Box>

      {/* Popup Modal for Playing Video */}
      <Modal
        open={Boolean(selectedVideo)}
        onClose={() => setSelectedVideo(null)}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center", p: 2 }}
      >
        <Box
          sx={{
            position: "relative",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: { xs: 1, sm: 2 }, // Smaller padding on mobile
            outline: "none",
            width: { xs: "100vw", sm: "auto" },
            height: { xs: "100vh", sm: "auto" },
            maxWidth: { xs: "100vw", sm: "90vw" },
            maxHeight: { xs: "100vh", sm: "90vh" },
            m: { xs: 0, sm: "auto" }, // Remove margin on mobile for true edge-to-edge
            borderRadius: { xs: 0, sm: 2 }, // Optional: remove border radius on mobile
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: { xs: "center", sm: "flex-start" }
          }}
        >
          <IconButton
            onClick={() => setSelectedVideo(null)}
            sx={{
              position: "absolute",
              top: { xs: 12, sm: 8 },
              right: { xs: 12, sm: 8 },
              zIndex: 10,
              bgcolor: "rgba(255,255,255,0.8)"
            }}
          >
            <CloseIcon />
          </IconButton>

          {selectedVideo && (
            <>
              <video
                src={selectedVideo.src}
                controls
                autoPlay
                playsInline
                // Use Tailwind responsive classes to let the video scale fluidly on mobile
                className="w-full h-auto max-h-[60vh] sm:w-[400px] sm:h-[600px] sm:max-h-[70vh] border-2 border-black rounded-xl object-contain overflow-hidden"
              />
              <div className="mt-3 text-center px-4">
                <h3 className="font-bold text-lg">{selectedVideo.title}</h3>
                <a
                  href={selectedVideo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline text-sm mt-1 inline-block"
                >
                  Visit Link
                </a>
              </div>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
}