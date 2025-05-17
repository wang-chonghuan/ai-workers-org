import type { Metadata } from 'next'
import { DM_Mono, Geist } from 'next/font/google'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { Toaster } from '@/components/ui/sonner'
import { ClerkProvider } from "@clerk/nextjs";
import SiteHeader from "@/components/SiteHeader";
import './globals.css'
const geistSans = Geist({
  variable: '--font-geist-sans',
  weight: '400',
  subsets: ['latin']
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-dm-mono',
  weight: '400'
})

export const metadata: Metadata = {
  title: 'AI Workers',
  description:
    'Discover the best AI virtual employees at ai-workers.org'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${dmMono.variable} antialiased`}>
          <SiteHeader />
          <NuqsAdapter>{children}</NuqsAdapter>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  )
}
