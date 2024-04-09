import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Combobox, createTheme, MantineProvider, Title} from "@mantine/core";
import Header from "@/component/header/header"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FreeBook",
  description: "Бронирование книг в библеотеке",
};

const theme = createTheme({

})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

        <html lang="en">
          <body className={inter.className}>
          <MantineProvider theme={theme}>
                <Header/>
              {children}
          </MantineProvider>
          </body>
        </html>

  );
}
