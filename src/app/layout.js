"use client";
import './globals.css'
import { Provider } from 'react-redux'
import { appStore } from '@/store/appStore'
import "bootstrap/dist/css/bootstrap.css"

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <Provider store={appStore}>
        {children}
        </Provider>
        </body>
    </html>
  )
}
