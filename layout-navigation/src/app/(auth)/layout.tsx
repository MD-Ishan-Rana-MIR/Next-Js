import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: {
    default: "Bike share",
    template: "%s | Bike share app ",
    absolute: "",
  },
  description: '...',
}

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

export default layout;