import type { Metadata } from "next";
import "./globals.css";
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { ColorSchemeScript, MantineProvider, Paper, createTheme, mantineHtmlProps } from "@mantine/core";
import { Header } from "@/components/header";
import Footer from "@/components/footer";

const theme = createTheme({
  colors: {
    'dark': ['#171516', '#171516', '#171516', '#171516', '#171516', '#171516', '#171516', '#171516', '#171516', '#171516'],
    'light': ['#1f1f1f', '#1f1f1f', '#1f1f1f', '#1f1f1f', '#1f1f1f', '#1f1f1f', '#1f1f1f', '#1f1f1f', '#1f1f1f', '#1f1f1f'],
    'gold': ['#e4d19f', '#e4d19f', '#e4d19f', '#e4d19f', '#e4d19f', '#e4d19f', '#e4d19f', '#e4d19f', '#e4d19f', '#e4d19f']
  },
});

export const metadata: Metadata = {
  title: "Auto Deko",
  description: "Auto Deko",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Paper bg="dark" mih={"100vh"}>
            <Header/>
            {children}
            <Footer/>
          </Paper>
        </MantineProvider>
      </body>
    </html>
  );
}
