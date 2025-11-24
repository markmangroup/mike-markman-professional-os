import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GlobalTopBar from "@/components/GlobalTopBar";
import Footer from "@/components/Footer";
import { InterviewModeProvider } from "@/context/InterviewModeContext";
import { InterviewModeBody } from "@/components/InterviewModeBody";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mike Markman Professional OS",
  description: "Professional portfolio and operating system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <InterviewModeProvider>
            <InterviewModeBody>
              <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-950">
                <GlobalTopBar />
                <main className="flex-1">
                  {children}
                </main>
                <Footer />
              </div>
            </InterviewModeBody>
          </InterviewModeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
