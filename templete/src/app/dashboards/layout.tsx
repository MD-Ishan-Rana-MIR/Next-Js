import React from 'react'

const TempleteLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <h1>Dashboard layout</h1>
        <main>
            {
                children
            }
        </main>
    </div>
  )
}

export default TempleteLayout