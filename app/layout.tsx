import { Geist, Geist_Mono } from "next/font/google"
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import "@/style/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", fontSans.variable,)}
    >
      <head>
        <title>John Vincent Sefuesca - Portfolio</title>
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen bg-gradient-to-bl from-gray-700/40 to-gray-0 bg-gradient-to-tr from-gray-700/40 to-gray-0">
            <Header />
            <main className="flex-1 container mx-auto px-6">  
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
