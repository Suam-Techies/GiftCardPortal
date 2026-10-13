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
  title: "GiftCardMall/MyGift | Check Your Balance | Activate Card",
  description:
    "Check out GiftCardMall/Mygift card balance, activation guidance, Visa repayment fundamentals and useful response to common prepaid gift card inquiries.",
  authors: [{ name: "GiftCardPortal Editorial Team" }],
  alternates: {
    canonical: "https://giftcardportal.vip/",
  },
  openGraph: {
    type: "website",
    title: "GiftCardMall/MyGift | Check Your Balance | Activate Card",
    description:
      "Check out GiftCardMall/Mygift card balance, activation guidance, Visa repayment fundamentals and useful response to common prepaid gift card inquiries.",
    url: "https://giftcardportal.vip/",
    siteName: "GiftCardPortal",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "GiftCardMall/MyGift | Check Your Balance | Activate Card",
    description:
      "Check out GiftCardMall/Mygift card balance, activation guidance, Visa repayment fundamentals and useful response to common prepaid gift card inquiries.",
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
