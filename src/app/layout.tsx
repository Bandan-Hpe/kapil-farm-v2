import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/header";
import Footer from "@/Components/footer";
import Container from "@/Components/container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Blog App",
  description: "This is a blog post website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  bg-zinc-100 text-zinc-800  min-h-screen`}
      >
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
