import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
 title: "Adrian Pląsek - portfolio",
 description: "Moje programistyczne portfolio",
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en">
   <head>
    <link rel="stylesheet" href={`./globals.css?v=${Date.now()}`} />
   </head>
   <body>{children}</body>
  </html>
 );
}
