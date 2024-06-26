export const metadata = {
  title: 'Welcome',
  description: 'Welcome Next 14',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div>영화 휘뚜루 마뚜루</div>
        {children}
      </body>
    </html>
  )
}
