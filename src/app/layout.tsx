import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import WhatsappChatWidget from "./components/WhatsappChatWidget/WhatsappChatWidget";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Manipal School | Best School in Mangalore",
  description:
    "Manipal School is a leading institution in Mangalore, providing quality education, modern facilities, and a nurturing environment for students to excel academically and personally.",
  keywords: [
    "Manipal School",
    "Best School in Mangalore",
    "Top Schools in Karnataka",
    "CBSE Schools in Mangalore",
    "ICSE Schools in Mangalore",
    "Best Education for Kids",
    "Manipal Education",
    "Schools near me",
  ],
  openGraph: {
    title: "Manipal School | Best School in Mangalore",
    description:
      "Join Manipal School, a premier educational institution in Mangalore, known for excellence in academics, extracurricular activities, and student development.",
    url: "https://www.manipalschool.edu.in/", // Replace with the actual website URL
    siteName: "Manipal School",
    images: [
      {
        url: "https://apply.manipalschool.edu.in/icon.png", // Replace with an actual Open Graph image
        width: 1200,
        height: 630,
        alt: "Manipal School Campus",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manipal School | Best School in Mangalore",
    description: "Providing top-quality education with modern facilities and a student-centric approach at Manipal School, Mangalore.",
    images: [
      "https://apply.manipalschool.edu.in/icon.png",
    ], // Replace with actual image path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KJ9K99ZX');
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KJ9K99ZX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <Toaster position="top-right" />
        {children}
        <WhatsappChatWidget />
      </body>
    </html>
  );
}
