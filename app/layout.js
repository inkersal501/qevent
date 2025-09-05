import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import SessionWrapper from "@/components/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "QEvent",
};

export default function RootLayout({ children }) {
  return (
    <SessionWrapper>
      <html lang="en">
        <head> 
          <meta name="viewport" content="width=device-width, initial-scale=1" /> 
          <link rel="icon" src="/images/logo.png"/>
        </head>
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="light">
            <Header />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </SessionWrapper>
  );
}
