import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import { Header } from '@/components/layout/header'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  variable: '--font-sans',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  display: 'swap',
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: 'AnshinDanang.jp - Hỗ Trợ Du Lịch Đà Nẵng',
  description: 'Nền tảng hỗ trợ du lịch toàn diện cho du khách Nhật Bản. Tìm khách sạn, tour, vé tham quan và trải nghiệm tuyệt vời ở Đà Nẵng.',
  generator: 'v0.app',
  openGraph: {
    title: 'AnshinDanang.jp',
    description: 'Khám phá Đà Nẵng với AnshinDanang - nền tảng du lịch hàng đầu cho du khách Nhật Bản',
    locale: 'vi_VN',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html lang={locale} className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
