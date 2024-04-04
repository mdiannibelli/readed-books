import Layout from './components/Layout'


import '@fontsource-variable/aleo';
import '@fontsource-variable/aleo/wght-italic.css';
import BooksGrid from './components/BooksGrid';
import BooksAdd from './components/BooksAdd';
import useBooksData from './hooks/data';

function App() {
  const [books] = useBooksData()
  return (
    <>
      <Layout>
        <section className='flex justify-center items-center p-8 border-b-4 border-green-700'>
          {books.length >= 0 ? <h1 className='text-4xl text-gray-700'>Libros que has leido</h1> :
          <h1 className='text-4xl text-gray-700'>Añade los libros que has leido</h1> }
        </section>
        <BooksGrid/>
        <BooksAdd/>
      </Layout>
    </>
  )
}

export default App
