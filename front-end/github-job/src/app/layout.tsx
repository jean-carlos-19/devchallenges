import { Poppins } from 'next/font/google'

const inter = Poppins({weight:'500',  subsets: ['latin']})

export const metadata = {
  title: 'Github-Jobs',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
