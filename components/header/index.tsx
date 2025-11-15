import { Container, Divider, Group, Image, Paper } from '@mantine/core';
import logo from "@/img/logo.jpeg"

export function Header() {
  return (
    <header>
      <Paper bg="dark" pt="md">
        <Group justify='center'>
            <Image src={logo.src} fit="contain" w={70} h={70}/>
        </Group>
        <Divider mt="md" color="gold"/>
      </Paper>
    </header>
  );
}