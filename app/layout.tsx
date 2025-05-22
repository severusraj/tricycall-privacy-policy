import React from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from './components/theme-provider'
import { ThemeToggle } from './components/theme-toggle'

export const metadata: Metadata = {
  title: 'Tricycall Privacy Policy',
  description: 'Privacy Policy for Tricycall - Your trusted ride-hailing service',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 