import React from 'react'

interface Props {
    children: React.ReactNode
}

export default function Layout({children} : Props) {
  return (
    <main className='bg-white min-h-screen'>
        {children}
    </main>
  )
}
