import { useEffect } from "react"
import BookItem from "./BookItem";
import useBooksData from "../hooks/data";


export default function BooksGrid() {
    const [books, fetchData] = useBooksData();

    useEffect(() => {
        fetchData()
    }, [books])



  return (
    <section className='flex justify-center items-center gap-x-2'>
        {
            books.map((book) => (
                <BookItem key={book.id} book={book}/>
            ))
        }
    </section>
  )
}
