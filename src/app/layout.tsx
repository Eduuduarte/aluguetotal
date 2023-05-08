"use client"

import { DM_Sans } from 'next/font/google';
import { Box } from '@mui/material';

const dmSans = DM_Sans({
  style: "normal",
  weight: ['400', '500', '700'],
  subsets: ['latin']
})

export const metadata = {
  title: 'AlugueTotal',
  description: 'Gestão de imovéis',
}

type Props = {
  children: React.ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <html lang='pt-br'>
      <body className={dmSans.className} style={{ padding: 0, margin: 0}}>
        <Box width="100%" height="100vh">
          {children}
        </Box>
      </body>
    </html>
  )
}

export default Layout;
