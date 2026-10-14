import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport = {
  themeColor: "#f5fbff",
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL("https://giftcardportal.vip"),
  title: {
    default: "GiftCardMall/MyGift | Balance & Activation | Official Website ",
    template: "GiftCardMall/MyGift | Balance & Activation | Official Website ",
  },
  description:
    "Explore how to find your cards real balance-check Activation, read available funds, understand transactions, and solve prepaid gift card issues.",
  applicationName: "GiftCard",
  keywords: [
    "GiftCardMall MyGift balance",
    "GiftCardMall balance",
    "MyGift prepaid card",
    "prepaid gift card activation",
    "prepaid card transaction help",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "d7fwaF-V5qImKhqz5ZKviudOopPTSJwzaS796Dsatxk",
  },
  alternates: {
    canonical: "https://giftcardportal.vip/",
 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-US" className={inter.variable}>
      <head>
        {/* Open Graph & Preconnect */}
        <link rel="preconnect" href="https://static.cloudflareinsights.com" />
      </head>
      <body>
        {children}
        {/* Cloudflare Browser Insights / Web Analytics RUM script */}
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "cloudflare_insights"}'
        ></script>
      </body>
    </html>
  );
}
