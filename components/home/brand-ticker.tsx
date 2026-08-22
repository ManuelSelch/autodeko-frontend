import { Box, Group, Text } from "@mantine/core";
import classes from "./brand-ticker.module.css";

const messages = [
  "Handgefertigt in Bayern",
  "Echte Autoteile",
  "Jedes Stück ein Unikat",
  "Design mit Geschichte",
];

function TickerSequence() {
  return (
    <Group className={classes.sequence} gap={36} wrap="nowrap">
      {messages.map((message) => (
        <Text
          component="span"
          key={message}
          fz="xs"
          fw={700}
          lts="0.1em"
          tt="uppercase"
          style={{ whiteSpace: "nowrap" }}
        >
          {message}{" "}
          <Text component="span" c="var(--color-accent)" aria-hidden="true">
            ●
          </Text>
        </Text>
      ))}
    </Group>
  );
}

export function BrandTicker() {
  return (
    <Box
      component="aside"
      aria-label={messages.join(", ")}
      bg="var(--color-ink)"
      c="var(--color-paper)"
      py={16}
      style={{ overflow: "hidden" }}
    >
      <Box className={classes.track} aria-hidden="true">
        <TickerSequence />
        <TickerSequence />
      </Box>
    </Box>
  );
}
