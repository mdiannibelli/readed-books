import { useEffect } from "react"
import BookItem from "./BookItem";
import useBooksData from "../hooks/data";


export default function BooksGrid() {
    const [books, fetchData, deleteBooks] = useBooksData();

    useEffect(() => {
        fetchData()
    }, [books])

  return (
    <>
        <section className="flex flex-col min-h-[560px] max-h-[565px]">
            <div className="overflow-auto mb-4 flex-1" /* className={`${books.length < 6 ? 'min-h-screen' : 'min-h-[150dvh]'}`} */>

            <section className='grid p-2 items-center'>
               
                        {
                            books.map((book) => (
                                <BookItem key={book.id} book={book}/>
                                ))
                            }
                    
               
                
            </section>
            <div className="flex justify-end items-end relative">
                {books.length === 0 ? null : 
                <button onClick={deleteBooks} className="absolute top-0 right-0 mx-8 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 duration-300 outline-none select-none">Borrar todos</button>
            }
            </div>

            </div>
        </section>
    </>
  )
}
