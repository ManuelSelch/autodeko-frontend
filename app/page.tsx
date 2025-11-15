import { Container, Stack, Text, Title } from "@mantine/core";

export default function Home() {
  return (
    <Stack align="center">
      <Text fz={"h2"} c="white">Wir geben alten <Text span fz={"h2"} c="gold" fw="bold">Auto</Text>teilen ein neues Leben</Text>
      <Text fz={"h2"} c="white">–</Text>
      <Text fz={"h2"} c="white">als stilvolle, handgefertigte <Text span fz={"h2"} c="gold" fw="bold">Deko</Text>objekte.</Text>
    </Stack>
  );
}
