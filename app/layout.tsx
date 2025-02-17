
import { Inter as FontSans } from "next/font/google"
import './globals.css'

import { cn } from "@/lib/utils"
import { title } from "process"
import { Metadata } from "next"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title:'liveword',
  description: 'Your go to text editor'
}
export default function RootLayout({ children }: { children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      
      <body
        className={cn(
          "min-h-screen  font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
