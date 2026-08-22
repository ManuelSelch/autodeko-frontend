import type { Metadata } from "next";
import "./globals.css";
import "@mantine/core/styles.css";
import {
  ColorSchemeScript,
  MantineProvider,
  createTheme,
  mantineHtmlProps,
} from "@mantine/core";
import { Header } from "@/components/header";
import Footer from "@/components/footer";

const theme = createTheme({
  primaryColor: "accent",
  colors: {
    accent: [
      "#f9ebe8",
      "#f0d2cd",
      "#e0a69d",
      "#d0796b",
      "#c25746",
      "#b6402d",
      "#a93625",
      "#8d2b20",
      "#74251d",
      "#601f1a",
    ],
  },
  fontFamily: "Arial, Helvetica, sans-serif",
  headings: {
    fontFamily: "Arial, Helvetica, sans-serif",
    fontWeight: "600",
  },
});

export const metadata: Metadata = {
  title: "Auto Deko | Designobjekte aus echten Autoteilen",
  description: "Handgefertigte Einzelstücke und Wohnobjekte aus echten Autoteilen.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="de"
      className="scroll-smooth motion-reduce:scroll-auto"
      style={{ maxWidth: "100%", overflowX: "clip" }}
      {...mantineHtmlProps}
    >
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body
        className="min-w-80 bg-paper font-sans text-ink antialiased"
        style={{ maxWidth: "100%", overflowX: "clip" }}
      >
        <MantineProvider theme={theme} defaultColorScheme="light">
          <Header />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
