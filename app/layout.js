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
  title: "GiftCardMall/MyGift | Check Your Balance | Official Web Portal",
  description:
    "GiftCardMall/MyGift is the official online portal where you can directly check balance & card activation, review transactions, and manage prepaid gift cards.",
  authors: [{ name: "GiftCardPortal Editorial Team" }],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  verification: {
    google: "d7fwaF-V5qImKhqz5ZKviudOopPTSJwzaS796Dsatxk",
  },
  alternates: {
    canonical: "https://giftcardportal.vip/",
    languages: {
      "en-US": "https://giftcardportal.vip/",
      "en": "https://giftcardportal.vip/",
      "x-default": "https://giftcardportal.vip/",
    },
  },
  openGraph: {
    type: "website",
    title: "GiftCardMall/Mygift | Activation Gift | Check Your Gift",
    description:
      "An independent guide to prepaid gift card balances, activation steps, Visa payments, and common GiftCardMall/Mygift questions.",
    url: "https://giftcardportal.vip/",
    siteName: "GiftCardPortal",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "GiftCardMall/Mygift Guide",
    description:
      "Get clear guidance on gift card balances, activation steps, Visa transactions, and everyday prepaid card concerns.",
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
