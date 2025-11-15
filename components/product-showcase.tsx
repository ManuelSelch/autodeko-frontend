import { Carousel, CarouselSlide } from "@mantine/carousel";
import { Stack, Box } from "@mantine/core";

export default function ProductShowcase() {
  return (
    <Stack c="white" align="center">
      <Box
        // Background that simulates a spotlight
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 400,
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
            bottom: -30,
            left: "50%",
            transform: "translateX(-50%)",
            width: 260,
            height: 40,
            background: "linear-gradient(to top, #333, #555)",
            borderRadius: "50%",
            boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
          }}
        />

        {/* Carousel */}
        <Carousel withIndicators height={400} slideSize="100%">
          <CarouselSlide>
            <Box
              style={{
                height: 300,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 40,
                fontWeight: 700,
              }}
            >
              1
            </Box>
          </CarouselSlide>

          <CarouselSlide>
            <Box
              style={{
                height: 300,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 40,
                fontWeight: 700,
              }}
            >
              2
            </Box>
          </CarouselSlide>

          <CarouselSlide>
            <Box
              style={{
                height: 300,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 40,
                fontWeight: 700,
              }}
            >
              3
            </Box>
          </CarouselSlide>
        </Carousel>
      </Box>
    </Stack>
  );
}
