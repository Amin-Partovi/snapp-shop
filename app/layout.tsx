import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Container, Header } from "@/components/layouts";
import localFont from "next/font/local";

const sahelFont = localFont({
  src: [
    {
      path: "../public/fonts/Sahel-Black.woff2",
      weight: "800",
    },
    {
      path: "../public/fonts/Sahel-Bold.woff2",
      weight: "700",
    },
    {
      path: "../public/fonts/Sahel-Light.woff2",
      weight: "300",
    },
    {
      path: "../public/fonts/Sahel.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/Sahel-SemiBold.woff2",
      weight: "600",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${sahelFont.className} antialiased`}>
        <div id="modal-portal" />
        <Header />
        <main>
          <Container>{children}</Container>
        </main>
      </body>
    </html>
  );
}
