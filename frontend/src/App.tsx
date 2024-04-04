import { useState } from 'react'
import Layout from './components/Layout'


import '@fontsource-variable/aleo';
import '@fontsource-variable/aleo/wght-italic.css';
import BooksGrid from './components/BooksGrid';
import BooksAdd from './components/BooksAdd';

function App() {

  return (
    <>
      <Layout>
        <section className='flex justify-center items-center p-12'>
          <h1 className='text-4xl text-white'>Libros que has leido</h1>
        </section>
        <BooksGrid/>
        <BooksAdd/>
      </Layout>
    </>
  )
}

export default App
