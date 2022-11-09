import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <title>VeniMitev.com</title>
      </head>
      <body className='min-h-screen'>
        <nav className='bg-slate-500 h-6'>
          <div className='container flex justify-between'>
            <div className='flex flex-wrap gap-6 px-3'>
              <div className='text-center'>
                <Link href='/'>
                  Home
                </Link>
              </div>
              <div>
                <Link href='/portfolio'>
                  Portfolio
                </Link>
              </div>
              <div>
                <Link href='/stories'>
                  Stories
                </Link>                
              </div>
            </div>
            <div className=''>
              <Link href='https://www.venimitev.dev'>
                VeniMitev.dev
              </Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
