import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RoutePreloader from "@/components/shared/RoutePreloader";
import PerformanceMonitor from "@/components/shared/PerformanceMonitor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "周宏全 - 个人简历",
  description: "一个充满热情的全栈开发者的个人简历网站",
  keywords: ["portfolio", "developer", "web development", "frontend", "backend"],
  metadataBase: new URL('https://your-domain.com'),
  openGraph: {
    title: '周宏全 - 个人简历',
    description: '一个充满热情的全栈开发者的个人简历网站',
    url: 'https://your-domain.com',
    siteName: '周宏全的个人简历',
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '周宏全 - 个人简历',
    description: '一个充满热情的全栈开发者的个人简历网站',
    creator: '@yourusername',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-16">
              {children}
            </main>
            <Footer />
          </div>
          <RoutePreloader />
          <PerformanceMonitor />
        </ThemeProvider>
      </body>
    </html>
  );
}
