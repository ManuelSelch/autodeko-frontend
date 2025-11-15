import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import {
  ActionIcon,
  Button,
  Card,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';

const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

export function ContactUs() {
  const icons = social.map((Icon, index) => (
    <ActionIcon key={index} size={28} variant="transparent">
      <Icon size={22} stroke={1.5} />
    </ActionIcon>
  ));

  return (
    <Stack align="center" pb={"lg"}>
        <Card w={"80vw"}>
            <Stack>
                <TextInput
                    label="Email"
                    placeholder="your@email.com"
                    required
                    radius="md"
                />
                <TextInput
                    label="Name"
                    placeholder="John Doe"
                    mt="md"
                    radius="md"
                />
                <Textarea
                    required
                    label="Your message"
                    placeholder="I want to order your goods"
                    minRows={4}
                    mt="md"
                    radius="md"
                />

                <Group justify="flex-end" mt="md">
                    <Button radius="md">Send</Button>
                </Group>
            </Stack>
        </Card>
    </Stack>
  );
}