import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tic Tac Toe',
  description: 'A simple Tic Tac Toe game built with Next.js.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 antialiased">{children}</body>
    </html>
  )
}
