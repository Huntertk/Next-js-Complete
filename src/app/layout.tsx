import React from "react"
import './globals.css'

const BaseLayout = ({children}:Readonly<{children:React.ReactNode}>) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}

export default BaseLayout