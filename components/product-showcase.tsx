"use client"
import { Carousel, CarouselSlide } from "@mantine/carousel";
import { Stack, Box, Image, Overlay } from "@mantine/core";
import autoFass from "@/img/auto-fass.png";
import { useState } from "react";

export default function ProductShowcase() {
  const [active, setActive] = useState(0);
  const slides = [1, 2, 3, 4];

  return (
    <Stack c="white" align="center" className="relative">
      {/* <Overlay 
        gradient="linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)"
        opacity={0.85}
        zIndex={1}
      /> */}

      <Box
        style={{
          position: "relative",
          width: "full",
          paddingTop: 80,
        }}
      >
        {/* Spotlight glow */}
        <Box
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 300,
            height: 200,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,255,255,0.45), rgba(0,0,0,0))",
            filter: "blur(40px)",
            pointerEvents: "none",
          }}
        />

        {/* The podium */}
        <Box
          style={{
            position: "absolute",
            bottom: 90,
            left: "50%",
            transform: "translateX(-50%)",
            width: 200,
            height: 60,
            background: "linear-gradient(to top, #333, #555)",
            borderRadius: "50%",
            boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
          }}
        />

        {/* Carousel */}
        <Carousel 
          withIndicators 
          height={400} 
          slideSize="50%"
          onSlideChange={setActive}
          emblaOptions={{
            loop: true,
            dragFree: false,
            align: "center"
          }}
        >
          {slides.map((item, index) => (
            <CarouselSlide key={index}>
              <Box
                style={{
                  height: 300,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 40,
                  fontWeight: 700,
                }}
                className={`
                  transition-transform duration-300 ease-in-out
                  ${active === index ? "scale-105" : "scale-80"}
                `}
              >
                <Image src={autoFass.src} h={"100%"} fit="contain" />
              </Box>
            </CarouselSlide>
          ))}
        </Carousel>
      </Box>
    </Stack>
  );
}
