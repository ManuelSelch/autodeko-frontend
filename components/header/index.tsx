import { Center, Image, Stack } from "@mantine/core";
import logo from "@/img/logo.png";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-md">
      <Stack>
        <Center>
            <Image
              className="h-16 w-16 object-contain"
              src={logo.src}
              alt="Auto Deko Handmade"
              fit="contain"
            />
          </Center>
      </Stack>
    </header>
  );
}
