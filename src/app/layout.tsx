import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import clsx from 'clsx'
import { Navbar } from '@/components/navbar'
import { NotificationComponent } from '@/components/notification-component'
import { Sidebar } from '@/components/sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Little Helper',
  description: 'Clone Trello App',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const bodyStyle = clsx('dark', inter.className)
  return (
    <html lang="en">
      <body className={bodyStyle}>
        <div className="dark:bg-slate-800 dark:text-white">
          <header>
            <Navbar />
          </header>
          <Sidebar />
          <main className="flex min-h-screen flex-col">{children}</main>
        </div>
        <NotificationComponent />
      </body>
    </html>
  )
}
