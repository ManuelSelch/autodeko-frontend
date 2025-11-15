import { Container, Stack, Text, Title } from "@mantine/core";
import { Carousel, CarouselSlide } from '@mantine/carousel';
import ProductShowcase from "@/components/product-showcase";

export default function Home() {
  return (
    <>
      <Stack align="center" gap={0} py="lg" bg="light">
        <Text fz={"h3"} c="white">Wir geben alten <Text span fz={"h3"} c="gold" fw="bold">Auto</Text>teilen ein neues Leben</Text>
        <Text fz={"h3"} c="white">–</Text>
        <Text fz={"h3"} c="white">als stilvolle, handgefertigte <Text span fz={"h3"} c="gold" fw="bold">Deko</Text>objekte.</Text>
      </Stack>

      <Stack c={"white"}>
       <ProductShowcase />
      </Stack>
    </>
  );
}
