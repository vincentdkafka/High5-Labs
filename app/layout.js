import "./globals.css";
import { Poppins } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "High5 Labs",
  description: "Automating and developing modern web solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={poppins.className} 
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
