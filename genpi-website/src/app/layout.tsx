import Footer from "./Footer";
import Header from "./Header";
import "./globals.css";
import { Inter, Quicksand, Lilita_One } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const quicksand = Quicksand({ subsets: ["latin"] });
const lilitaOne = Lilita_One({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "GenPI Dumai",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
