import { Center, Image, Stack } from "@mantine/core";
import logo from "@/img/logo.png";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-transparent bg-paper/90">
      <Stack>
        <Center>
            <Image
              className="h-24 w-16 object-contain drop-shadow-md"
              src={logo.src}
              alt="Auto Deko Handmade"
              fit="contain"
            />
          </Center>
      </Stack>
    </header>
  );
}
