import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import { AuthContextProvider } from '@/context/AuthContext'
import { PropsWithChildren } from 'react'
import {MainNav} from '@/components/MainNav'

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
        <body>
          <MainNav />
          {children}
          {/* <AuthContextProvider>
            {children}
          </AuthContextProvider> */}
        </body>
    </html>
  )
}
