import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aniket Sakpal — ML Scientist & AI Researcher',
  description:
    'Machine Learning Scientist with 10 years building production-grade AI for Search, Ranking, and Agentic systems. 2× U.S. Patent holder. CMU alum.',
  openGraph: {
    title: 'Aniket Sakpal — ML Scientist',
    description: '10 years of production AI. 2 U.S. patents. $7M+ revenue uplift.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
