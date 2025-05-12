import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <html lang="en">
        <body
        >
          {children}
        </body>
      </html>
    </div>
  )
}

export default layout

