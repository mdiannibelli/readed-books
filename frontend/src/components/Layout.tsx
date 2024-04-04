import React from 'react'

interface Props {
    children: React.ReactNode
}

export default function Layout({children} : Props) {
  return (
    <main className='bg-gray-700 min-h-screen'>
        {children}
    </main>
  )
}
