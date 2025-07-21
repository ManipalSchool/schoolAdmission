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
  title: "Admissions Open 2025 | Manipal School Mangalore | Apply Now",
  description:
    "Admissions Open 2025! Join Manipal School, one of Karnataka’s top CBSE schools in Mangalore. Apply online now for quality education, modern facilities, and a nurturing environment.",
  keywords: [
    "Manipal School Admissions 2025",
    "CBSE School Admission Mangalore",
    "Top CBSE Schools Karnataka",
    "Apply to Manipal School",
    "Best Schools for Admissions",
    "School Admission Process",
    "School Rankings Karnataka",
    "Manipal School Fees",
    "Scholarships at Manipal School",
  ],
  openGraph: {
    title: "Admissions Open 2025 | Manipal School Mangalore | Apply Now",
    description:
      "Apply now for admissions at Manipal School, Mangalore. Discover our top rankings, excellent academic record, and world-class facilities for holistic student development.",
    url: "https://www.manipalschool.edu.in/",
    siteName: "Manipal School",
    images: [
      {
        url: "https://apply.manipalschool.edu.in/icon.png",
        width: 1200,
        height: 630,
        alt: "Manipal School Campus",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Admissions Open 2025 | Manipal School Mangalore | Apply Now",
    description:
      "Join Manipal School, a top CBSE school in Karnataka. Apply online today to secure your child’s future with quality education and a nurturing environment.",
    images: ["https://apply.manipalschool.edu.in/icon.png"],
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
        {/* Google Ads / gtag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16998126623" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-16998126623');
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
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
          
        </noscript>
        <Toaster position="top-right" />
        {children}
        {/* <WhatsappChatWidget /> */}
      </body>
    </html>
  );
}
