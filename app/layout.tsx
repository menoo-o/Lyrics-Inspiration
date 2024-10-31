import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Song Inspiation",
  description: "Generated with the help of llama",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
